import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

const tableName = 'contacts';
const fieldName = 'name';
const fieldMobile = 'mobile';
const fieldLandline = 'landline';
const fieldUri = 'uri';
const fieldIsFav = 'isFav';
const fieldId = 'id';

export const getDbOpenConnection = async () => {
  return openDatabase(
    {name: 'contacts.db', location: 'default'},
    () => {},
    error => {
      console.error(error);
    },
  );
};

export const createTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
  ${fieldId} INTEGER PRIMARY KEY AUTOINCREMENT,
  ${fieldName} TEXT NOT NULL,
    ${fieldMobile} TEXT NOT NULL,
    ${fieldLandline} TEXT,
    ${fieldUri} TEXT,
    ${fieldIsFav} Boolean DEFAULT 0
   )`;
  try {
    db.executeSql(query);
  } catch (error) {
    console.log(`got error while create table ${error}`);
  }
};

export const insertDataIntoTable = async (
  db,
  name,
  mobile,
  landline = null,
  uri = null,
) => {
  const query = `INSERT INTO ${tableName} (${fieldName}, ${fieldMobile}, ${fieldLandline}, ${fieldUri}) VALUES (?,?,?,?)`;
  const values = [name, mobile, landline, uri];
  try {
    db.executeSql(query, values);
  } catch (error) {
    console.log(`got error while insert table ${error}`);
  }
};

export const getAllContacts = async db => {
  const contacts = [];
  const results = await db.executeSql(
    `Select ${fieldId},${fieldName},${fieldMobile},${fieldIsFav},${fieldLandline}, ${fieldUri} from ${tableName}`,
  );
  results.forEach(element => {
    for (let i = 0; i < element.rows.length; i++) {
      let object = element.rows.item(i);
      contacts.push(object);
    }
  });
  return contacts;
};
