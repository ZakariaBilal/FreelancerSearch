import React from "react";
import MaterialTable from "material-table";

export default function TableArticlesSection() {
  const [state, setState] = React.useState({
    columns: [
      { title: "ID", field: "id", type: "numeric" },
      { title: "Title", field: "titre" },
      { title: "Date", field: "date" },
      { title: "Number Of Likes", field: "numberOfLikes", type: "numeric" },
      { title: "Number Of Visits", field: "numberOfVisits", type: "numeric" },
      {
        title: "Number Of Comments",
        field: "numberOfComments",
        type: "numeric"
      }
    ],
    data: [
      {
        id: 1,
        freelancer: 11,
        titre: "Mandatory client-server attitude",
        contenu: "Ergonomic national circuit",
        date: "5/1/2019",
        numberOfLikes: 56,
        numberOfVisits: 215,
        numberOfComments: 10
      },
      {
        id: 2,
        freelancer: 20,
        titre: "Extended tertiary strategy",
        contenu: "Extended tangible adapter",
        date: "8/23/2019",
        numberOfLikes: 91,
        numberOfVisits: 309,
        numberOfComments: 9
      },
      {
        id: 3,
        freelancer: 4,
        titre: "De-engineered uniform paradigm",
        contenu: "Enterprise-wide 4th generation adapter",
        date: "11/30/2019",
        numberOfLikes: 48,
        numberOfVisits: 488,
        numberOfComments: 1
      },
      {
        id: 4,
        freelancer: 21,
        titre: "Polarised zero tolerance definition",
        contenu: "Stand-alone cohesive knowledge user",
        date: "3/16/2019",
        numberOfLikes: 76,
        numberOfVisits: 235,
        numberOfComments: 6
      },
      {
        id: 5,
        freelancer: 26,
        titre: "Profound non-volatile artificial intelligence",
        contenu: "Exclusive directional firmware",
        date: "1/27/2019",
        numberOfLikes: 65,
        numberOfVisits: 247,
        numberOfComments: 4
      },
      {
        id: 6,
        freelancer: 20,
        titre: "Realigned contextually-based application",
        contenu: "Networked reciprocal archive",
        date: "9/14/2019",
        numberOfLikes: 33,
        numberOfVisits: 426,
        numberOfComments: 1
      },
      {
        id: 7,
        freelancer: 21,
        titre: "Profound empowering analyzer",
        contenu: "Reactive real-time paradigm",
        date: "3/10/2019",
        numberOfLikes: 62,
        numberOfVisits: 372,
        numberOfComments: 4
      },
      {
        id: 8,
        freelancer: 5,
        titre: "Synergized clear-thinking productivity",
        contenu: "Realigned web-enabled hardware",
        date: "5/8/2019",
        numberOfLikes: 99,
        numberOfVisits: 280,
        numberOfComments: 6
      },
      {
        id: 9,
        freelancer: 16,
        titre: "Public-key analyzing capability",
        contenu: "Realigned homogeneous policy",
        date: "4/22/2019",
        numberOfLikes: 13,
        numberOfVisits: 363,
        numberOfComments: 6
      },
      {
        id: 10,
        freelancer: 14,
        titre: "Fundamental mission-critical capacity",
        contenu: "Visionary leading edge website",
        date: "11/4/2019",
        numberOfLikes: 48,
        numberOfVisits: 485,
        numberOfComments: 2
      },
      {
        id: 11,
        freelancer: 7,
        titre: "Proactive mobile migration",
        contenu: "Total eco-centric frame",
        date: "6/5/2019",
        numberOfLikes: 56,
        numberOfVisits: 424,
        numberOfComments: 3
      },
      {
        id: 12,
        freelancer: 4,
        titre: "Function-based 24 hour parallelism",
        contenu: "Face to face incremental core",
        date: "4/6/2019",
        numberOfLikes: 82,
        numberOfVisits: 498,
        numberOfComments: 1
      },
      {
        id: 13,
        freelancer: 2,
        titre: "Profit-focused composite pricing structure",
        contenu: "Optional real-time middleware",
        date: "12/30/2019",
        numberOfLikes: 11,
        numberOfVisits: 396,
        numberOfComments: 7
      },
      {
        id: 14,
        freelancer: 20,
        titre: "Future-proofed global neural-net",
        contenu: "Cross-platform local time-frame",
        date: "4/6/2019",
        numberOfLikes: 89,
        numberOfVisits: 485,
        numberOfComments: 7
      },
      {
        id: 15,
        freelancer: 5,
        titre: "Streamlined tertiary moratorium",
        contenu: "Robust secondary toolset",
        date: "8/27/2019",
        numberOfLikes: 13,
        numberOfVisits: 244,
        numberOfComments: 3
      },
      {
        id: 16,
        freelancer: 25,
        titre: "Enhanced client-driven open system",
        contenu: "Total upward-trending monitoring",
        date: "9/20/2019",
        numberOfLikes: 84,
        numberOfVisits: 405,
        numberOfComments: 1
      },
      {
        id: 17,
        freelancer: 56,
        titre: "Mandatory needs-based flexibility",
        contenu: "User-centric context-sensitive parallelism",
        date: "11/19/2019",
        numberOfLikes: 42,
        numberOfVisits: 496,
        numberOfComments: 10
      },
      {
        id: 18,
        freelancer: 8,
        titre: "User-centric empowering collaboration",
        contenu: "Reactive stable solution",
        date: "2/16/2019",
        numberOfLikes: 25,
        numberOfVisits: 212,
        numberOfComments: 7
      },
      {
        id: 19,
        freelancer: 23,
        titre: "Focused bi-directional interface",
        contenu: "Re-engineered regional installation",
        date: "1/15/2019",
        numberOfLikes: 50,
        numberOfVisits: 267,
        numberOfComments: 8
      },
      {
        id: 20,
        freelancer: 8,
        titre: "Function-based zero tolerance toolset",
        contenu: "Stand-alone background strategy",
        date: "1/14/2019",
        numberOfLikes: 11,
        numberOfVisits: 225,
        numberOfComments: 6
      }
    ]
  });

  return (
    <MaterialTable
      title='Articles'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: null,
        onRowUpdate: null,
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
          })
      }}
    />
  );
}
