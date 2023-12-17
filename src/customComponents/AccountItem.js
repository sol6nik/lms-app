import {Text, StyleSheet} from 'react-native'
import React from 'react'

import {useTheme} from '../hooks/use-theme';
import {Col, Row, Grid} from "react-native-easy-grid";

export default function AccountItem({label, value}) {

    const [theme, setTheme] = useTheme()

    return (
        <Grid>
            <Row style={styles.separator}>
                <Col>
                    <Text style={styles.textLeftCol}>{label}</Text>
                </Col>
                <Col>
                    <Text style={theme === 'dark' ? styles.textRightColDark : styles.textRightCol}>{value}</Text>
                </Col>
            </Row>
        </Grid>
    )
}

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        paddingBottom: 10,
        marginBottom: 10,
    },
    separatorDark: {
        borderBottomWidth: 1,
        borderBottomColor: '#393A39',
        paddingBottom: 10,
        marginBottom: 10,
    },
    textLeftCol: {
        fontSize: 15,
        color: '#999999',
        fontWeight: 'bold',
        fontFamily: 'gilroy-semibold',
    },
    textRightCol: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'gilroy-semibold'
    },
    textRightColDark: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'gilroy-semibold'
    }
})