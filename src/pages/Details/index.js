import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import styles from './styles';

function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;

    const incidentValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value);
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de "${incidentValue}"`;
    function navigateToIncidents() {
        navigation.navigate('Incidents');
    };

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        });
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&t=${message}`);
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={navigateToIncidents}>

                    <Feather name="arrow-left" size={28} color="#E02041" />
                    <Text style={styles.detailsButtonText}> Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.incident} >
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>
                    {incidentValue}
                </Text>
            </View>
            <View style={styles.contactBox} >
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions} >
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


export default Details;