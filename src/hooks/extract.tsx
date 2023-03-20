/* eslint-disable no-undef */
import { useToast } from '@chakra-ui/react'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import api from '../services/api'
import { useAct } from './act'

export interface TypeExtractActs {
  name: string
  field: string
}

interface ExtractActContextData {
  filesUploaded: any[]
  headerActText: string[]
  bodyActText: any[]
  textActs: string[]
  handleFilesUploaded: (files: any[]) => void
  setFilesUploaded: React.Dispatch<React.SetStateAction<any[]>>
  typeExtractActs: TypeExtractActs[]
  selectedExtractAct: string
  handleSalectedExtractionActs: (act: string) => void
  loadingFile: number
  setSelectedExtractAct: React.Dispatch<React.SetStateAction<string>>
  handleBodyText: () => any[]
  headerActTextDownload: any[]
  setHeaderActTextDownload: React.Dispatch<React.SetStateAction<any[]>>
  setBodyActTextDownload: React.Dispatch<React.SetStateAction<any[]>>
  bodyActTextDownload: any[]
  extractActs: {}
  setHighlights: React.Dispatch<React.SetStateAction<any[]>>
  highlights: any[]
  allTexts: any[]
}

const ExtractActContext = createContext<ExtractActContextData>(
  {} as ExtractActContextData,
)

type ExtractActProviderProps = {
  children: React.ReactNode
}

function ExtractActProvider({
  children,
}: ExtractActProviderProps): JSX.Element {
  const [filesUploaded, setFilesUploaded] = useState([])
  const [typeExtractActs, setTypeExtractActs] = useState([])
  const [extractActs, setExtractActs] = useState({})
  const [selectedExtractAct, setSelectedExtractAct] = useState('')
  const [headerActText, setHeaderActText] = useState([])
  const [headerActTextDownload, setHeaderActTextDownload] = useState([])
  const [bodyActText, setBodyActText] = useState([])
  const [highlights, setHighlights] = useState([])
  const [textActs, setTextActs] = useState([])
  const [loadingFile, setLoadingFile] = useState(0)
  const [bodyActTextDownload, setBodyActTextDownload] = useState([])
  const [isJson, setIsJson] = useState(false)
  const [allTexts, setAllTexts] = useState([])

  const { allActsName } = useAct()
  const toast = useToast()

  const handleBodyText = useCallback(() => {
    const bodyDownload = bodyActText.map((ent) =>
      headerActTextDownload.map(function (header, index) {
        return {
          [header.key]: ent[index],
        }
      }),
    )

    let flagActs = 0
    const totalActs = bodyDownload.length
    const totalEntities = bodyDownload[0].length - 1

    const all = {}
    const pic = []

    bodyDownload.forEach(function (elem, index) {
      if (flagActs === totalActs) return

      let flagEntities = 0
      while (flagEntities <= totalEntities) {
        if (flagEntities === totalEntities) {
          const mac = Object.assign({}, all)
          pic[index] = mac
          break
        }

        const key = Object.keys(elem[flagEntities])[0]
        const values = Object.values(elem[flagEntities])[0]
        all[key] = values

        flagEntities += 1
      }
      flagActs += 1
    })
    return pic
  }, [headerActTextDownload, bodyActText])

  const handleFilesUploaded = useCallback(
    (files: any[]) => {
      try {
        if (files.length >= 2 || filesUploaded.length !== 0) {
          return toast({
            title: 'Erro ao adicionar arquivos',
            description:
              'Envie somente um arquivo, ou verifique se um arquivo já foi adicionado',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }

        const filesUploadedWithStatus = files.map(function (file) {
          return {
            file,
            status: false,
          }
        })

        const arquiveName = JSON.stringify(files[0]?.name.split(`.`)[1])
        const TYPE_ARQUIVE = ['pdf', 'json']

        const isValidToExtract = TYPE_ARQUIVE.includes(JSON.parse(arquiveName))

        if (!isValidToExtract) {
          return toast({
            title: 'Erro ao adicionar arquivos',
            description:
              'Somente arquivos nos formatos PDF e JSON são permitidos.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }

        if (JSON.parse(arquiveName) === 'json') {
          setIsJson(true)
        } else {
          setIsJson(false)
        }
        
        setFilesUploaded([...filesUploaded, ...filesUploadedWithStatus])
      } catch (error) {
        return toast({
          title: 'Erro ao adicionar arquivos',
          status: 'error',
          description: 'Tente novamente mais tarde.',
          duration: 9000,
          isClosable: true,
        })
      }
    },
    [filesUploaded, toast],
  )

  const handleSendFormData = useCallback(async () => {
    setLoadingFile(0)
    const validFiles = filesUploaded.filter((value) => value.status === false)
    const refine = validFiles.map((value) => value.file)

    const formData = new FormData()
    refine.map((value) => formData.append('file', value))
    setLoadingFile(40)

  if (!!refine.length) {
      try {
      const response = await api
        .post('/extracao/entidade_highlight', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function (response) {
          setLoadingFile(60)
          return response.data
        })
      setLoadingFile(80)
      setExtractActs(response)
      }catch(e){
        setFilesUploaded([])
        setSelectedExtractAct('')
        return toast({
          title: 'Erro ao adicionar arquivos',
          status: 'error',
          description: 'Servidor indisponível.',
          duration: 9000,
          isClosable: true,
        })
      }
    }
  }, [filesUploaded, isJson])

  useEffect(() => {
    if (Object.entries(extractActs).length > 0) {
      setLoadingFile(100)
    }
  }, [extractActs])

  const handleSalectedExtractionActs = useCallback((act: string) => {
    setSelectedExtractAct(act)
    setBodyActTextDownload([])
    setHeaderActTextDownload([])
  }, [])

  const handleExtractedEntitiesAndText = useCallback(() => {
    const content = extractActs[selectedExtractAct]

    if (content) {
      const allTextsPerActs = content.content.map(item => item.entities[1])
      setAllTexts([...allTextsPerActs])

      const chosenActs: any[] = Object.entries(content)

      const headerActs = Object.values(chosenActs[0][1])

      const headerActsEntities = headerActs.map((act) => Object.values(act))
      const headerActsFormatted = headerActsEntities.map((file) => file[0])

      setHeaderActText(headerActsFormatted)

      const headerDowload = headerActs.map(function (act) {
        return {
          label: Object.values(act)[0],
          key: Object.keys(act)[0],
        }
      })

      setHeaderActTextDownload(headerDowload)

      const chosenActsEntities = chosenActs.map((act) => act[1])
      const chosenActEnttitiesFormated = Object.entries(chosenActsEntities).map(
        function (act) {
          return act[1]
        },
      )
      const chosenActEntitiesRight = Object.entries(chosenActEnttitiesFormated)
      const allBodyActText = chosenActEntitiesRight[1][1].map((act) => act.entities);
      const formattedAllBodyActText = []
      allBodyActText.map(item => {
        const firstPositionsBodyActTextRefact = item.slice(0, 2)
        const bodyActTextRefact = item.slice(2, )
        
        const bodyActTextModify = bodyActTextRefact.map(act => {
          if(act!==null)  return act.name
            return null
        })
        
        const result = [...firstPositionsBodyActTextRefact, ...bodyActTextModify]
        formattedAllBodyActText.push(result)
      })

      const allHighlights = []
      allBodyActText.map(item => {
        const bodyActTextRefact = item.slice(2, )
        allHighlights.push([...bodyActTextRefact])
      })

      setHighlights([...allHighlights])

      setBodyActText([...formattedAllBodyActText])
      setTextActs(chosenActEntitiesRight[1][1].map((act) => act.text))
    }
  }, [extractActs, selectedExtractAct])

  useEffect(() => {
    handleExtractedEntitiesAndText()
  }, [handleExtractedEntitiesAndText])

  useEffect(() => {
    if (filesUploaded) {
      handleSendFormData()
    }
  }, [filesUploaded, handleSendFormData])

  useEffect(() => {
    const formTypeActs = Object.keys(extractActs)

    if (formTypeActs.length > 0) {
      setTypeExtractActs(
        formTypeActs.map(function (nameAct) {
          return {
            name: allActsName[nameAct],
            field: nameAct,
          }
        }),
      )
    }
  }, [allActsName, extractActs])

  return (
    <ExtractActContext.Provider
      value={{
        filesUploaded,
        handleFilesUploaded,
        setFilesUploaded,
        typeExtractActs,
        handleSalectedExtractionActs,
        selectedExtractAct,
        headerActText,
        bodyActText,
        textActs,
        loadingFile,
        setSelectedExtractAct,
        handleBodyText,
        headerActTextDownload,
        setHeaderActTextDownload,
        bodyActTextDownload,
        setBodyActTextDownload,
        extractActs,
        setHighlights,
        highlights,
        allTexts
      }}
    >
      {children}
    </ExtractActContext.Provider>
  )
}

function useExtract(): ExtractActContextData {
  const context = useContext(ExtractActContext)

  if (!context) {
    throw new Error('useExtract must be used within an AuthProvider')
  }

  return context
}

export { ExtractActProvider, useExtract }
