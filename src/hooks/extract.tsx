import { useDisclosure, useToast } from '@chakra-ui/react';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useAct } from './act';

interface ExtractActContextData {
  filesUploaded: any[];
  headerActText: string[];
  bodyActText: any[];
  textActs: string[];
  handleFilesUploaded: (files: any[]) => void;
  setFilesUploaded: React.Dispatch<React.SetStateAction<any[]>>
  typeExtractActs: string[];
  selectedExtractAct: string;
  handleSalectedExtractionActs: (act: string) => void;
  loadingFile: number;
  setSelectedExtractAct: React.Dispatch<React.SetStateAction<string>>;
  handleBodyText: () => any[];
  headerActTextDownload: any[];
  setHeaderActTextDownload: React.Dispatch<React.SetStateAction<any[]>>;
  setBodyActTextDownload: React.Dispatch<React.SetStateAction<any[]>>;
  bodyActTextDownload: any[]
}

const ExtractActContext = createContext<ExtractActContextData>({} as ExtractActContextData);

type ExtractActProviderProps = {
  children: React.ReactNode;
}
function ExtractActProvider({ children }: ExtractActProviderProps ): JSX.Element {
  const [filesUploaded, setFilesUploaded] = useState([]);
  const [typeExtractActs, setTypeExtractActs] = useState([]);
  const [extractActs, setExtractActs] = useState({});
  const [selectedExtractAct, setSelectedExtractAct] = useState('');
  const [headerActText, setHeaderActText] = useState([]);
  const [headerActTextDownload, setHeaderActTextDownload] = useState([]);
  const [bodyActText, setBodyActText] = useState([]);
  const [textActs, setTextActs] = useState([]);
  const [loadingFile, setLoadingFile] = useState(0);
  const [bodyActTextDownload, setBodyActTextDownload] = useState([]);

  const { allActsName } = useAct();
  const toast = useToast();

  const handleBodyText = useCallback(() => {
    let bodyDownload = bodyActText.map(ent => headerActTextDownload.map(function(header, index){
      return {
          [header.key]: ent[index]
      }
    }))
  
    let flagActs = 0;
    let totalActs = bodyDownload.length;
    let totalEntities = bodyDownload[0].length - 1;
    
    let all = {};
    let pic = []
    
    bodyDownload.forEach(function(elem, index) {
        if(flagActs === totalActs) return;
        
        let flagEntities = 0;
        while(flagEntities <= totalEntities){
            if(flagEntities === totalEntities){
                let mac = Object.assign({}, all);
                pic[index] = mac;
                break;
            }
            
            let key = Object.keys(elem[flagEntities])[0];
            let values = Object.values(elem[flagEntities])[0];
            all[key] = values;
            
            flagEntities+=1;
        }
        flagActs+=1;
    }) 
  return pic;
  
  }, [headerActTextDownload, bodyActText])

  const handleFilesUploaded = useCallback((files: any[]) => {
    
    if (files.length >= 2 || filesUploaded.length !== 0) {
      return toast({
        title: 'Erro ao adicionar arquivos',
        description: "Envie somente um arquivo, ou verifique se um arquivo já foi adicionado",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    let filesUploadedWithStatus = files.map(function(file){
      return {
          file,
          status: false
      }
  });

  // @ts-ignore
  if(JSON.stringify(filesUploaded).includes(filesUploadedWithStatus.map(value => JSON.stringify(value)))){
    toast({
      title: 'Erro ao adicionar arquivos',
      description: "Você já adicionou um desses arquivos, verifique novamente",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    return;
  }
    setFilesUploaded([...filesUploaded, ...filesUploadedWithStatus]);
  }, [filesUploaded]);

  const handleSendFormData = useCallback(async() => {
    setLoadingFile(0);
    let validFiles = filesUploaded.filter(value => value.status === false);
    let refine = validFiles.map(value => value.file);
    
    const formData = new FormData();
    refine.map(value =>  formData.append('file', value))
    setLoadingFile(40);

    const response = await api.post("/extracao/all", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
        .then( function(response){
          setLoadingFile(60);
          return response.data
        })
    
    setLoadingFile(80);
    return setExtractActs(response);
  }, [filesUploaded]);

  useEffect(() => {
    if(Object.entries(extractActs).length > 0) {
    setLoadingFile(100);
  }}, [extractActs]);

  const handleSalectedExtractionActs = useCallback((act: string) => {
    setSelectedExtractAct(act);
    setBodyActTextDownload([]);
    setHeaderActTextDownload([]);
  }, [])

  const handleExtractedEntitiesAndText = useCallback(() => {

    let content = extractActs[selectedExtractAct];

    if(!!content) {
      let chosenActs: any[] = Object.entries(content);

      let headerActs = Object.values(chosenActs[0][1]);

      let headerActsEntities = headerActs.map(act => Object.values(act));
      let headerActsFormatted = headerActsEntities.map(file => file[0]);

      setHeaderActText(headerActsFormatted);

      let headerDowload = headerActs.map(function(act){
        return {
            label: Object.values(act)[0],
            key: Object.keys(act)[0]
        }
    });

      setHeaderActTextDownload(headerDowload);

      let chosenActsEntities = chosenActs.map(act => act[1]);
      let chosenActEnttitiesFormated = Object.entries(chosenActsEntities).map(function(act){
        return act[1]
      });
      let chosenActEntitiesRight = Object.entries(chosenActEnttitiesFormated)

      setBodyActText(chosenActEntitiesRight[1][1].map(act => act.entities));
      setTextActs(chosenActEntitiesRight[1][1].map(act => act.text));
    }

  }, [extractActs, selectedExtractAct]);

  useEffect(() => {
    handleExtractedEntitiesAndText();
  }, [handleExtractedEntitiesAndText])
  
  useEffect(() => {
    if(!!filesUploaded){
      handleSendFormData();
    }
  }, [handleSendFormData] );

  useEffect(() => {
    let formTypeActs = Object.keys(extractActs);

    if(formTypeActs.length > 0){
      setTypeExtractActs(formTypeActs.map(function(nameAct){
        return {
          name: allActsName[nameAct],
          field: nameAct
        }
      } ));
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
        setBodyActTextDownload
      }}
    >
      {children}
    </ExtractActContext.Provider>
  );
};

function useExtract(): ExtractActContextData {
  const context = useContext(ExtractActContext);

  if (!context) {
    throw new Error('useAct must be used within an AuthProvider');
  }
 
  return context;
}

export { ExtractActProvider, useExtract };