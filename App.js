import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { StyleSheet, Platform, Image, Button, Text, View, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Text style={styles.instructions}>
        Settings
        </Text>
        <Icon name="rocket" size={30} color="#900" /> 
      </View>
    );
  }
}
class meow extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<ScrollView>
        <View style={styles.container}>
          <Image source={require('./assets/ReactNativeFirebase.png')} style={[styles.logo]}/>
          <Text style={styles.welcome}>
            Welcome to {'\n'} React Native Firebase
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          {Platform.OS === 'ios' ? (
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          ) : (
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Cmd+M or shake for dev menu
            </Text>
          )}
          <View style={styles.modules}>
            <Text style={styles.modulesHeader}>The following Firebase modules are pre-installed:</Text>
            {firebase.admob.nativeModuleExists && <Text style={styles.module}>admob()</Text>}
            {firebase.analytics.nativeModuleExists && <Text style={styles.module}>analytics()</Text>}
            {firebase.auth.nativeModuleExists && <Text style={styles.module}>auth()</Text>}
            {firebase.config.nativeModuleExists && <Text style={styles.module}>config()</Text>}
            {firebase.crashlytics.nativeModuleExists && <Text style={styles.module}>crashlytics()</Text>}
            {firebase.database.nativeModuleExists && <Text style={styles.module}>database()</Text>}
            {firebase.firestore.nativeModuleExists && <Text style={styles.module}>firestore()</Text>}
            {firebase.functions.nativeModuleExists && <Text style={styles.module}>functions()</Text>}
            {firebase.iid.nativeModuleExists && <Text style={styles.module}>iid()</Text>}
            {firebase.invites.nativeModuleExists && <Text style={styles.module}>invites()</Text>}
            {firebase.links.nativeModuleExists && <Text style={styles.module}>links()</Text>}
            {firebase.messaging.nativeModuleExists && <Text style={styles.module}>messaging()</Text>}
            {firebase.notifications.nativeModuleExists && <Text style={styles.module}>notifications()</Text>}
            {firebase.perf.nativeModuleExists && <Text style={styles.module}>perf()</Text>}
            {firebase.storage.nativeModuleExists && <Text style={styles.module}>storage()</Text>}
          </View>
        </View>
      </ScrollView>        
        </View>
    );
  }
}

class info extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
{Platform.OS === 'ios' ? (
  <Text style={styles.instructions}>
    IOS TAT
  </Text>
) : (
  <ScrollView>

  <Text style={styles.instructions}>
    ANDROID    |
    {'getAPILevel:'+DeviceInfo.getAPILevel() + '\n' +
  'getFirstInstallTime:'+DeviceInfo.getFirstInstallTime()+'\n' +
  'getInstanceID:'+DeviceInfo.getInstanceID()+'\n' +
  'getLastUpdateTime:'+DeviceInfo.getLastUpdateTime()+'\n' +
  'getMaxMemory:'+DeviceInfo.getMaxMemory()+'\n' +
  'getPhoneNumber:'+DeviceInfo.getPhoneNumber()+'\n' +
  'getSerialNumber:'+DeviceInfo.getSerialNumber()
  }
  {
          
          'getApplicationName:' + DeviceInfo.getApplicationName() +'\n' +
          'getBrand:'+DeviceInfo.getBrand()+'\n' +
          'getBuildNumber:'+DeviceInfo.getBuildNumber()+'\n' +
          'getBundleId:'+DeviceInfo.getBundleId()+'\n' +
          'getCarrier:'+DeviceInfo.getCarrier()+'\n' +
          'getDeviceCountry:'+DeviceInfo.getDeviceCountry()+'\n' +
          'getDeviceId:'+DeviceInfo.getDeviceId()+'\n' +
          'getDeviceLocale:'+DeviceInfo.getDeviceLocale()+'\n' +
          'getDeviceName:'+DeviceInfo.getDeviceName()+'\n' +
          'getFontScale:'+DeviceInfo.getFontScale()+'\n' +
          'getFreeDiskStorage:'+DeviceInfo.getFreeDiskStorage()+'\n' +
          
          'getManufacturer:'+DeviceInfo.getManufacturer()+'\n' +
          'getModel:'+DeviceInfo.getModel()+'\n' +
          'getReadableVersion:'+DeviceInfo.getReadableVersion()+'\n' +
          'getSystemName:'+DeviceInfo.getSystemName()+'\n' +
          'getSystemVersion:'+DeviceInfo.getSystemVersion()+'\n' +
          'getTimezone:'+DeviceInfo.getTimezone()+'\n' +
          'getTotalDiskCapacity:'+DeviceInfo.getTotalDiskCapacity()+'\n' +
          'getTotalMemory:'+DeviceInfo.getTotalMemory()+'\n' +
          'getUniqueID:'+DeviceInfo.getUniqueID()+'\n' +
          'getUserAgent:'+DeviceInfo.getUserAgent()+'\n' +
          'is24Hour:'+DeviceInfo.is24Hour()+'\n' +
          'isEmulator:'+DeviceInfo.isEmulator()+'\n' +
          'isPinOrFingerprintSet:'+DeviceInfo.isPinOrFingerprintSet()+'\n' +
          'isTablet:'+DeviceInfo.isTablet()
        }
  </Text>
        </ScrollView>        

)}
        
        </View>
    );
  }
}
export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  meow: { screen: meow },
  info: { screen: info },

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});