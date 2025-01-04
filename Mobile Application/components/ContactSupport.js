import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Linking } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const ContactSupport = ({ visible, onClose, theme = {} }) => {
  const openEmail = () => {
    Linking.openURL('mailto:malithavisada@gmail.com').catch(err => console.error("Failed to open email:", err));
  };

  const openWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=+94761621101').catch(err => console.error("Failed to open WhatsApp:", err));
  };

  const openPhone = () => {
    Linking.openURL('tel:0761621101').catch(err => console.error("Failed to open phone dialer:", err));
  };

  console.log('Modal visible:', visible);
  console.log('Theme:', theme);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { backgroundColor: theme.surface || '#fff' }]}>
          <Text style={[styles.modalText, { color: theme.text || '#000' }]}>Contact Support</Text>
          <TouchableOpacity style={styles.contactItem} onPress={openEmail}>
            <MaterialIcons name="email" size={20} color="black" />
            <Text style={[styles.contactText, { color: theme.text || '#000' }]}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem} onPress={openWhatsApp}>
            <FontAwesome name="whatsapp" size={20} color="green" />
            <Text style={[styles.contactText, { color: theme.text || '#000' }]}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem} onPress={openPhone}>
            <MaterialIcons name="phone" size={20} color="black" />
            <Text style={[styles.contactText, { color: theme.text || '#000' }]}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: '100%',
  },
  buttonClose: {
    backgroundColor: '#17bd5fff',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 7,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
  },
});

export default ContactSupport;