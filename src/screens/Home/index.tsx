import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, FlatList } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {

  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Jack Sparrow', 'Thomas Shelby', 'Vulgo Mec Dillan'];

  function handleParticipantAdd() {
    if(participants.includes("Rodrigo")){
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
    }
    console.log("Você clicou no botão de adicionar")
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ])
    console.log(`Você clicou no botão de remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>
        Segunda, 17 de Abril de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          // keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença

          </Text>
        )}
      />

     
    </View>
  )
}