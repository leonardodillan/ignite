import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {

  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Jack Sparrow', 'Thomas Shelby', 'Vulgo Mec Dillan'];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você removeu o participante ${name}`)
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))
        }
      </ScrollView>

     
    </View>
  )
}