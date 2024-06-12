import AsyncStorage from "@react-native-async-storage/async-storage/src";

const useStorage = ()=>{

    const getItem = async (key) =>{

        try{
            const session = await AsyncStorage.getItem(key);

            return JSON.parse(session) || [];

        }catch(error){
            alert("erro ao buscar sessao " + error)
            return [];
        }
    }

    const saveItem = async (key, session_id) =>{
        try{
            const session = await getItem(key)
            session.push(session_id);

            await AsyncStorage.setItem(key,JSON.stringify(session))

        }catch(error){
            alert("erro ao salvar sessao " + error)
            
        }
        
    }
    const removeItem = async (key, session_id) =>{
        try{
            const session = await getItem(key);
            let mySession = session.filter( (item) =>{
                return (item !== session_id)
            })

            AsyncStorage.setItem(key,JSON.stringify(mySession))

            return mySession;
        }catch(error){
            alert("erro ao deletar sessao " + error)
        }
        
    }
    return {
        saveItem,
        getItem,
        removeItem,
    }
}