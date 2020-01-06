
import React from 'react';
import MaterialTable from 'material-table';

export default function TableSection() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id' ,type:'numeric' },
      { title: 'Comment', field: 'comment' },
      { title: 'Date', field: 'date' },
      {
        title: 'IDAricle',
        field: 'idarticle',
        type:'numeric' 
      },
      {
        title: 'IDUser',
        field: 'iduser',type:'numeric' 
      },
    ],
    data: [
      { id: 1, comment: 'this user is disrespectful', date: '2019-10-25', idarticle: null,iduser:3},
      { id: 2, comment: 'this article has bad language', date: '2019-10-27', idarticle: 1,iduser:null},
     
    ],
  });

  return (
    <MaterialTable
      title="Reports"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (null),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}