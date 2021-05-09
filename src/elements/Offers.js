import React from "react";
import Title from "../layout/Title";
import { DataGrid } from '@material-ui/data-grid';
import useOffers from "../hooks/offers";

const columns = [
    // { field: 'offerId', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Produkt', width: 450, sortable: false },
    { field: 'price', headerName: 'Cena' },
    { field: 'stock', headerName: 'Ilość' },
    { field: 'watchersCount', headerName: 'Obserwacje' },
    { field: 'visitsCount', headerName: 'Wizyt' },
    { field: 'soldCount', headerName: 'Sprzedano' },
    { field: 'publicationDate', headerName: 'Data publikacji', width: 150 }
]

export default function Offers() {
    const offers = useOffers()

    return (
        <React.Fragment>
            <Title>Moje oferty</Title>
            {offers &&
                <DataGrid rows={offers} columns={columns} autoHeight autoPageSize getRowId={(row) => row.offerId}/>
            }
        </React.Fragment>
    )
}
