
import React from 'react';
import MaterialTable from 'material-table';

export default function Tablerequestsfreelancer() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Service', field: 'service' },
      { title: 'Localisation', field: 'localisation' },
      { title: 'Description', field: 'description'},
      { title: 'IDFreelancer', field: 'idfreelancer'},
      { title: 'IDUser', field: 'iduser'},
      { title: 'Price', field: 'price'},
      { title: 'Date of request', field: 'date_of_request'},
      { title: 'Date of execution', field: 'date_of_execution'},
      { title: 'Status', field: 'status'},
    ],
    data: [
      { service: 'Cleaning', localisation: 'Rabat,Maroc', description: 'Clean my office at agdal', idfreelancer: 3, iduser: 1,price: '100 Dh' ,date_of_request: '2019-10-28',date_of_execution: '2019-10-28', status:'Terminé' },
     
    ],
  });

  return (
    <MaterialTable
      title="Requests"
      columns={state.columns}
      data={state.data}
    />
  );
}