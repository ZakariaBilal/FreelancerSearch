
import React from 'react';
import MaterialTable from 'material-table';

export default function TableUsersSection() {
  const [state, setState] = React.useState({
    columns: [
      { id: 'ID', field: 'id'  ,type: 'numeric'},
      { title: 'Full Name', field: 'full_name' },
      { title: 'Username', field: 'username' },
      { title: 'BirthDay', field: 'birthday'},
      { title: 'Email', field: 'email', type: 'email' },
      { title: 'Password', field: 'password' },
      { title: 'Address', field: 'address'},
    ],
    data: [
      { id:1, full_name: 'Gigi Hadid', username: 'Gigi Hadid', birthday: '1987-08-16', email: 'gigi.hadid@gmail.com',password: 'mypassword',address:'New york,215 uppereast side' },
      { id:2,full_name: 'Christian Louboutin', username: 'Christian Louboutin', birthday: '1997-07-16', email: 'christian.louboutin@gmail.com',password: 'mypassword1',address:'losangles,215 the wind' },
      { id:3,full_name: 'Kendall Jenner', username: 'Kendall Jenner', birthday: '1998-11-16', email: 'kendall.jenner@gmail.com',password: 'mypassword2',address:'carlina,215 fun town' },
    ],
  });

  return (
    <MaterialTable
      title="Freelancers"
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