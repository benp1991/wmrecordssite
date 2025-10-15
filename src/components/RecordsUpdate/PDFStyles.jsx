import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create(
    {
        page: {
            flexDirection: 'column',
            fontSize: '14pt',
            width : '90%',
            marginLeft:10,
            marginRight:10
        },
        headerSection: {
            flexDirection: 'row',
            marginRight: 10,
            justifyContent: "space-between",
        },
        tableStyle: {
            display: "table",
            width: "auto",
            fontSize: '6pt',
            borderStyle: "solid",
            borderColor: "#000",
            textAlign: "center"
        },
        tableColHeaderStyle: {
            width: "65pt",
            borderWidth: 1,
            borderLeftWidth: 0,
            fontSize:'10pt',
            backgroundColor: "#5eaaf7ff",
            fontWeight: "bold"
        },
        tableRowStyle: {
            flexDirection: "row",
            alignItems: "centre"
        },
        firstTableColHeaderStyle: {
            width: "45pt",
            borderBottomWidth: 1,
            borderRightWidth: 1,
            fontSize:'10pt'
        },
        firstTableColStyle: {
            width: "45pt",
            borderWidth: 1,
            borderTopWidth: 0,
            fontSize:'10pt',
            fontWeight: "bold",
            backgroundColor: "#5eaaf7ff"   
        },
        firstColTextStyle:{
            marginTop: 'auto',
            marginBottom: 'auto'
        },
        tableCellStyle: {
            margin: 1
        },
        tableColStyle: {
            width: "65pt",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0
        },
        recordboxtextstyle:{
            padding: 1
        },
        recordset:{
            marginTop: 5
        },
        recordsLogo:{
            maxWidth:100,
            justifyContent: "space-between",
            marginRight:'auto',
            marginLeft:'auto',
            width:'100%'
        }

    }
);
