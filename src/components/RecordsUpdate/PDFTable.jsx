import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles , tableCellStyle , firstTableColHeaderStyle , tableColStyle } from './PDFStyles.jsx';

const createTableHeader = (records , weightClass) => {
  const tableheaders = records.map(recordcol => {
      return (
        <View style={styles.tableColHeaderStyle}>
          <Text>{recordcol.age}</Text>
        </View>
          
      )
  });
  
  return (
      <View style={styles.tableRowStyle} fixed>
        <View style={firstTableColHeaderStyle}>
          <Text>{weightClass}</Text>
        </View>
        {tableheaders}
      </View>
    );
};

const createTableSquatRows = (records) => {
  const tablerows = records.map(recordcol => {
      return (     
        <View style={tableColStyle}>
          <View style={tableCellStyle}>
            <Text>{recordcol.squat.weight}</Text>
            <Text>{recordcol.squat.name}</Text>
            <Text>{recordcol.squat.date}</Text>
            <Text>{recordcol.squat.location}</Text>
          </View>
        </View>
      )
  });
    return (
      <View style={styles.tableRowStyle}>
        <View style={styles.firstTableColStyle}>
          <Text style={styles.firstColTextStyle}>Squat</Text>
        </View>
        {tablerows}

      </View>
    );
};

const createTableBenchRows = (records) => {
  const tablerows = records.map(recordcol => {
      return (     
        <View style={tableColStyle}>
          <View style={tableCellStyle}>
            <Text>{recordcol.bench.weight}</Text>
            <Text>{recordcol.bench.name}</Text>
            <Text>{recordcol.bench.date}</Text>
            <Text>{recordcol.bench.location}</Text>
          </View>
        </View>
      )
  });
    return (
      <View style={styles.tableRowStyle}>
        <View style={styles.firstTableColStyle}>
          <Text style={styles.firstColTextStyle}>Bench</Text>
        </View>
        {tablerows}

      </View>
    );
};

const createTableDeadRows = (records) => {
  const tablerows = records.map(recordcol => {
      return (     
        <View style={tableColStyle}>
          <View style={tableCellStyle}>
            <Text>{recordcol.deadlift.weight}</Text>
            <Text>{recordcol.deadlift.name}</Text>
            <Text>{recordcol.deadlift.date}</Text>
            <Text>{recordcol.deadlift.location}</Text>
          </View>
        </View>
      )
  });
    return (
      <View style={styles.tableRowStyle}>
        <View style={styles.firstTableColStyle}>
          <Text style={styles.firstColTextStyle}>Deadlift</Text>
        </View>
        {tablerows}
      </View>
    );
};

const createTable = (records, weightClass) => {
  return (
    <View style={styles.tableStyle}>
      {createTableHeader(records, weightClass)}
      {createTableSquatRows(records)}
      {createTableBenchRows(records)}
      {createTableDeadRows(records)}
    </View>
  )
}

export default createTable;