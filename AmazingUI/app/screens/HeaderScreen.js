import React from 'react';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

function HeaderScreen(props) {
    return (
        <Appbar.Header style={{ backgroundColor: 'white' }}>
            <Ionicons name="md-menu" size={34} color="#F86262" style={{ marginLeft: 10 }}></Ionicons>
            <Text style={{ marginLeft: 22, color: '#F86262', fontSize: 25 }}>Home</Text>
            {/* <Appbar.Content
                title="Title"
                subtitle="SubTitle"></Appbar.Content> */}
        </Appbar.Header>
    );
}

export default HeaderScreen;