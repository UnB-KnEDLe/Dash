import { Stack, Flex, Icon, Progress, Fade } from '@chakra-ui/react'
import HeadingTwo from '../Typography/HeadingTwo'
import SmallText from '../Typography/SmallText'
import { FaTrash } from 'react-icons/fa'
import { BoxLoading } from 'react-loadingg'
import { useExtract } from '../../hooks/extract'
import { useCallback } from 'react'

export default function ExtractFileManager() {
  const {
    filesUploaded,
    setSelectedExtractAct,
    setFilesUploaded,
    loadingFile,
    typeExtractActs,
    extractActs,
  } = useExtract()

  const totalNumber = Object.entries(extractActs).map((item: any) => ({
    n: item[1]?.content?.length,
    name: item[0],
  }))

  const showDetailsOfActs =
    typeExtractActs?.length > 0 &&
    loadingFile === 100 &&
    filesUploaded?.length > 0

  const totalNumberFormat = Object.values(totalNumber)

  const handleDeleteFile = useCallback(
    (fileTarget) => {
      setFilesUploaded(
        filesUploaded.filter((removeFile) => removeFile !== fileTarget),
      )
      setSelectedExtractAct('')
    },
    [filesUploaded, setFilesUploaded, setSelectedExtractAct],
  )

  return (
    <Stack spacing="1rem" maxHeight="28rem">
      <Flex flexDirection="column">
        <HeadingTwo headingTwoText="Arquivos" />
        <SmallText smallText="Gerencie o arquivo com extração completa." />
      </Flex>
      {filesUploaded.length > 0 ? (
        loadingFile !== 100 ? (
          <Progress hasStripe isAnimated value={loadingFile} />
        ) : (
          <Flex
            flexDirection="column"
            gap=".5rem"
            maxHeight="100%"
            overflowY="auto"
          >
            {filesUploaded.map((fileTarget, index) => (
              <Flex
                background={
                  fileTarget?.status
                    ? 'pallete.deactivated'
                    : 'pallete.secondaryLight10'
                }
                borderRadius=".25rem"
                p=".75rem 1rem"
                alignItems="center"
                justifyContent="space-between"
                marginRight=".25rem"
                key={index}
              >
                <Flex alignItems="center" gap=".75rem">
                  <SmallText
                    color={
                      fileTarget?.status
                        ? 'pallete.text'
                        : 'palpallete.deactivatedText'
                    }
                    smallText={fileTarget?.file?.name}
                  />
                </Flex>
                <Icon
                  as={FaTrash}
                  color={
                    fileTarget?.status
                      ? 'pallete.secondaryLight10'
                      : 'palpallete.deactivatedText'
                  }
                  onClick={() => handleDeleteFile(fileTarget)}
                />
              </Flex>
            ))}
          </Flex>
        )
      ) : (
        <BoxLoading
          speed="1.5"
          color="#99A8F4"
          style={{
            alignSelf: 'center',
            transform: 'scale(2.3)',
            marginTop: '2.5rem',
          }}
        />
      )}
      <Fade in={showDetailsOfActs}>
        {showDetailsOfActs && (
          <Flex flexDirection="column">
            <HeadingTwo
              marginBottom="0.5rem"
              headingTwoText="Atos Encontrados"
            />
            <Flex
              flexDirection="column"
              height="10.1rem"
              overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '0.35rem',
                },
                '&::-webkit-scrollbar-track': {
                  width: '1rem',
                  background: '#D7DCFF',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#17385F',
                  borderRadius: '2rem',
                },
              }}
            >
              {totalNumberFormat.map((typeAct, index) => (
                <>
                  <Flex
                    justifyContent="space-between"
                    borderBottom="1px solid #D7DCFF"
                    padding="0.4rem 1rem 0.4rem 0"
                  >
                    <SmallText
                      key={typeAct.name}
                      smallText={typeExtractActs[index]?.name}
                      fontSize="lg"
                      width="11rem"
                      textOverflow="ellipsis"
                      overflow="hidden"
                      whiteSpace="nowrap"
                    />
                    <Flex
                      background="linear-gradient(180deg, #B0BBE4 0%, #17385F 52.08%)"
                      color="#FFF"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      width="1.8rem"
                      height="1.8rem"
                      position="relative"
                      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    >
                      <SmallText
                        key={typeAct.name}
                        smallText={typeAct.n}
                        fontSize="lg"
                        marginTop="0.1rem"
                      />
                    </Flex>
                  </Flex>
                </>
              ))}
            </Flex>
          </Flex>
        )}
      </Fade>
    </Stack>
  )
}
