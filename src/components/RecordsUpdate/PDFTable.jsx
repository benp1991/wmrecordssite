import React from "react";
import { Text, View } from "@react-pdf/renderer";

const createTableHeader = (records) => {
  const tableheaders = records.map(recordcol => {
      return (
        <View style={firstTableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>{recordcol.age}</Text>
        </View>
          
      )
  });
  
  return (
      <View style={tableRowStyle} fixed>
        {tableheaders}
      </View>
    );
};

const createTableRows = (records) => {
  const tablerows = records.map(recordcol => {
      return (
        <View style={firstTableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>{recordcol.age}</Text>
        </View>
          
      )
  });
    return (
      <View style={tableRowStyle}>

        <View style={firstTableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

      </View>
    );
};

const createTable = (records) => {
  return (
    <View style={tableStyle}>
      {createTableHeader(records)}
      {createTableRows()}
    </View>
  )
}


const tableStyle = {
  display: "table",
  width: "auto"
}

const tableRowStyle = {
  flexDirection: "row",
};

const tableColHeaderStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  backgroundColor: "#bdbdbd"
};

const tableCellStyle = {
  textAlign: "center",
  margin: 5,
  fontSize: 10
};

const firstTableColHeaderStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  backgroundColor: "#bdbdbd"
};

const firstTableColStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderTopWidth: 0
};

const tableColStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0
};

const tableCellHeaderStyle = {
  textAlign: "center",
  margin: 4,
  fontSize: 12,
  fontWeight: "bold"
};

export default createTable;