import { useToast } from '@chakra-ui/react';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface ExtractActContextData {
  filesUploaded: any[];
  handleFilesUploaded: (files: any[]) => void;
  setFilesUploaded: React.Dispatch<React.SetStateAction<any[]>>
}

const ExtractActContext = createContext<ExtractActContextData>({} as ExtractActContextData);

type ExtractActProviderProps = {
  children: React.ReactNode;
}
function ExtractActProvider({ children }: ExtractActProviderProps ): JSX.Element {
  const [filesUploaded, setFilesUploaded] = useState([]);
  const toast = useToast();

  const handleFilesUploaded = useCallback((files: any[]) => {
    if (files.length >= 2) {
      return toast({
        title: 'Erro ao adicionar arquivos',
        description: "Você pode adicionar somente um arquivo por vez",
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
  }, [filesUploaded])

  const handleSendFormData = useCallback(async() => {
    let validFiles = filesUploaded.filter(value => value.status === false);
    let refine = validFiles.map(value => value.file);
    
    const formData = new FormData();
    refine.map(value =>  formData.append('file', value))

    const response = await api.post("/extracao/all", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
        .then( response => response.data )
    
    console.log(response);

    return response;
  }, [filesUploaded]);

  useEffect(() => {handleSendFormData()}, [handleSendFormData])

  return (
    <ExtractActContext.Provider
      value={{ 
        filesUploaded,
        handleFilesUploaded,
        setFilesUploaded
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