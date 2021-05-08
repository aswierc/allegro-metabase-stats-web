import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Title from "../layout/Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import useOffers from "../hooks/offers";

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

function preventDefault(event) {
    event.preventDefault()
}

export default function Offers() {
    const classes = useStyles()
    const offers = useOffers()

    console.log(offers)

    return (
        <React.Fragment>
            <Title>Moje oferty</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nazwa</TableCell>
                        <TableCell>Cena</TableCell>
                        <TableCell>Ilość</TableCell>
                        <TableCell>Wizyty</TableCell>
                        <TableCell>Obserwacje</TableCell>
                        <TableCell>Sprzedane</TableCell>
                        {/*<TableCell>Payment Method</TableCell>*/}
                        {/*<TableCell align="right">Sale Amount</TableCell>*/}
                    </TableRow>
                </TableHead>
                {offers &&
                    <TableBody>
                        {offers.map((offer) => (
                            <TableRow key={offer.offerId}>
                                <TableCell>{offer.offerId}</TableCell>
                                <TableCell>{offer.name}</TableCell>
                                <TableCell>{offer.price}</TableCell>
                                <TableCell>{offer.stock}</TableCell>
                                <TableCell>{offer.visitsCount}</TableCell>
                                <TableCell>{offer.watchersCount}</TableCell>
                                <TableCell>{offer.soldCount}</TableCell>
                                {/*<TableCell align="right"></TableCell>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                }
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Zobacz więcej
                </Link>
            </div>
        </React.Fragment>
    )
}
