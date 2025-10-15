import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create(
    {
        page: {
            flexDirection: 'column',
            fontSize: '14pt',
            width : '95%'
        },
        headerSection: {
            flexDirection: 'row',
            margin: 10,
            justifyContent: "space-between",
        },
        tableStyle: {
            display: "table",
            width: "auto",
            fontSize: '6pt'
        },
        tableColHeaderStyle: {
            width: "70pt",
            borderStyle: "solid",
            borderColor: "#000",
            borderBottomColor: "#000",
            borderWidth: 1,
            borderLeftWidth: 0,
            fontSize:'10pt',
            backgroundColor: "#5eaaf7ff",
            textAlign: "center",
            fontWeight: "bold"
        },
        tableRowStyle: {
            flexDirection: "row",
            alignItems: "centre"
        },



        
        firstTableColStyle: {
            width: "50pt",
            borderStyle: "solid",
            borderColor: "#000",
            borderWidth: 1,
            borderTopWidth: 0,
            fontSize:'10pt',
            fontWeight: "bold",
            backgroundColor: "#5eaaf7ff",
            alignItems: "centre"
            
        },
        firstColTextStyle:{
            marginTop: 'auto',
            marginBottom: 'auto'
        },
        recordset:{
            marginTop: 10
        }

    }
);

export const tableCellStyle = {
    textAlign: "center",
    margin: 3
};

export const firstTableColHeaderStyle = {
    width: "50pt",
    borderStyle: "solid",
    borderColor: "#000",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    fontSize:'10pt'
};

export const tableColStyle = {
    width: "70pt",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
};
