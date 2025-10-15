import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from './PDFStyles.jsx';

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
        <View style={styles.firstTableColHeaderStyle}>
          <Text>{weightClass}kg</Text>
        </View>
        {tableheaders}
      </View>
    );
};

const createTableSquatRows = (records) => {
  const tablerows = records.map(recordcol => {
      return (     
        <View style={styles.tableColStyle}>
          <View style={styles.tableCellStyle}>
            <Text style={styles.recordboxtextstyle}>{recordcol.squat.weight}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.squat.name}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.squat.date}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.squat.location}</Text>
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
        <View style={styles.tableColStyle}>
          <View style={styles.tableCellStyle}>
            <Text style={styles.recordboxtextstyle}>{recordcol.bench.weight}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.bench.name}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.bench.date}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.bench.location}</Text>
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
        <View style={styles.tableColStyle}>
          <View style={styles.tableCellStyle}>
            <Text style={styles.recordboxtextstyle}>{recordcol.deadlift.weight}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.deadlift.name}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.deadlift.date}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.deadlift.location}</Text>
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

const createTableTotalRows = (records) => {
  const tablerows = records.map(recordcol => {
      return (     
        <View style={styles.tableColStyle}>
          <View style={styles.tableCellStyle}>
            <Text style={styles.recordboxtextstyle}>{recordcol.total.weight}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.total.name}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.total.date}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.total.location}</Text>
          </View>
        </View>
      )
  });
    return (
      <View style={styles.tableRowStyle}>
        <View style={styles.firstTableColStyle}>
          <Text style={styles.firstColTextStyle}>Total</Text>
        </View>
        {tablerows}
      </View>
    );
};

const createTableBenchACRows = (records) => {
  const tablerows = records.map(recordcol => {
      return (     
        <View style={styles.tableColStyle}>
          <View style={styles.tableCellStyle}>
            <Text style={styles.recordboxtextstyle}>{recordcol.benchac.weight}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.benchac.name}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.benchac.date}</Text>
            <Text style={styles.recordboxtextstyle}>{recordcol.benchac.location}</Text>
          </View>
        </View>
      )
  });
    return (
      <View style={styles.tableRowStyle}>
        <View style={styles.firstTableColStyle}>
          <Text style={styles.firstColTextStyle}>Bench A/C</Text>
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
      {createTableTotalRows(records)}
      {createTableBenchACRows(records)}
    </View>
  )
}

export default createTable;