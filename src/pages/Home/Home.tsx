import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

import { useState } from "react";
import { People } from "@/data";
import { IPeople } from "@/models";
import { Checkbox, selectClasses } from "@mui/material";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setselectedPeople] = useState<IPeople[]>([]);
  const pageSize = 5;

  const findPeople = (people: IPeople) => !!selectedPeople.find( (p => p.id === people.id ));
  const filterPeople = (people: IPeople) => selectedPeople.filter( (p => p.id !== people.id ));

  const handleChange = (people: IPeople) => {
	setselectedPeople(findPeople(people) ?  filterPeople(people) : [...selectedPeople, people]);
  }

  console.table(selectedPeople);

  const columns: GridColDef[] = [
    {
      field: "actions",
      headerName: "",
      minWidth: 30,
	  renderCell: (params: GridRenderCellParams) =>
	   <Checkbox 
	   	size="small" 
		checked={findPeople(params.row)}
		onChange={() => handleChange(params.row)}
		/> 
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
	  renderCell: (params: GridRenderCellParams) => <> {params.value} </>
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
	  renderCell: (params: GridRenderCellParams) => <> {params.value} </>
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
	  renderCell: (params: GridRenderCellParams) => <> {params.value} </>
    },
    {
      field: "levelOfHappiness",
      headerName: "Happiness",
      flex: 1,
      minWidth: 150,
	  renderCell: (params: GridRenderCellParams) => <> {params.value} </>
    },
  ];
  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;
