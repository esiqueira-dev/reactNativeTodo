import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home() {
  const [mySkills, setMySkills] = useState([])
  const [newSkill, setNewSkill] = useState('')

  const handleAddNewSkill = () => {
    if (!newSkill) return;

    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, user</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#777"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button text={'add'} onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 30 }]}>
        My Skills
        </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(_item, index) => index}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  }
})
