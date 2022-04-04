import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
        <View style={styles.profileWrapper}>
          <Text style={styles.title}>
            Money Tracker
          </Text>
          <Text style={styles.subTitle}>
            Track Your Money
          </Text>
        <Gap height={24} />
        <View style={styles.balanceWrapper}>
          <Text style={styles.cardTitle}>
            Your Balance
          </Text>
          <Text style={styles.totalBalance}>
            Rp 10.000.000
          </Text>
          <Text>
          _______________________________
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    profileWrapper:{
      flex: 1,
      paddingLeft: 24,
      paddingVertical: 30,
      backgroundColor: 'white',
      flexDirection: 'column',
      alignItems: 'flex-start',
      },

      title: {
        paddingLeft: 20,
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
      },

      subTitle: {
        paddingLeft: 20,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
      },

      balanceWrapper: {
        flex: 1,
        marginTop: 24,
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 26,

        
      },

      cardTitle: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
      },

      totalBalance: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        alignItems: 'center',
        justifyContent: 'center',
      },


})