import { StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Modal} from "react-native";
import React , { useState }  from "react";

const ModalPractice = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    

    <SafeAreaView style = {{flex:1, justifyContent: 'center' , alignItems: 'center'}}>
            <View style={styles.centerView}>
                <Modal
                  animationType={'slide'}
                  transparent={false}
                  visible={showModal}
                  onRequestClose={()=>alert('Model has been closed.')}                
                >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Modal is open!</Text>
                        <Button
                          style={styles.button}
                          title='Click to Close Modal'
                          onPress={()=>setShowModal(!showModal)}   
                          color="#2196F3" 
                                            
                        />
                    </View>
                </Modal>
                <View style={styles.centeredView}>
                    
                <Text >Modal is open!</Text>
                <Button
                style={styles.button}
                 title='Click to Open Model'
                 onPress={()=>setShowModal(!showModal)}
                 color="#F194FF"  
                                
                />
               
                </View>
            </View>
        </SafeAreaView>
  );
};

export default ModalPractice;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex:1,
    justifyContent: 'center'
  },
  button: { borderRadius: 20, padding: 10, elevation: 2 },
  buttonOpen: { backgroundColor: "#F194FF" },
  buttonClose: { backgroundColor: "#2196F3" },
  textStyle: { color: "white", fontWeight: "bold", textAlign: "center" },
  modalText: { marginBottom: 15, textAlign: "center" },
});
