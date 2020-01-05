
import React from 'react';
import MaterialTable from 'material-table';

export default function TableArticlesFreelancerSection() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id', type:'numeric' },
      { title: 'Title', field: 'title' },
      { title: 'Date', field: 'date' },
    ],
    data: [
      { title: 'Freelancing', id: 1, date: '2019-10-21' },
      
    ],
  });

  return (
    <MaterialTable
      title="Your Articles"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
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