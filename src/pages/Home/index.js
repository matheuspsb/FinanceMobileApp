import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import { FlatList } from 'react-native';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    { 
        id: 1,
        label: 'Boleto teste 1',
        value: '300,90',
        date: '17/07/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Cliente teste 1',
        value: '2500,00',
        date: '19/07/2022',
        type: 1// receita
    },
    {
        id: 3,
        label: 'Salário teste',
        value: '7.200,00',
        date: '22/07/2022',
        type: 1// receita
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Test User" />
        
        <Balance saldo= "3.020,20" gastos="-527,00" />

        <Actions />

        <Text style={styles.title}>Últimas movimentações</Text>
        
        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements data={item} /> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
