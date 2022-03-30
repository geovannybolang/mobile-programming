import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <Header title="Money Tracker" />
      <View style={styles.contentWrapper}>
            <Text style={
              {
                  paddingLeft: 24,
                  paddingVertical: 13,
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
              }
          }> Your Balance</Text>
          <Gap height={4} />
            <Text style={
              {
                  textAlign: 'center',
                  fontSize: 24,
                  fontFamily: 'Poppins-Medium',
                  

              }
          }>
              Rp. 10.000.000</Text>
        <View syle={styles.line} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    contentWrapper:{
        flex:1,
        backgroundColor: "white",
        marginTop: 24,
        paddingHorizontal: 24,
      },

    line: {
        width: 311,
        height: 0,
        border: 1,

        backgroundColor: 'yellow',
    },

})