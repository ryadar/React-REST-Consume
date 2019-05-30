import React from "react"

import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";

class MaterialDesingExample extends React.Component{
    state = {isOpen: true};
    render() {
            var tags =
                <Card>
                    <CardPrimaryContent>
                        <h1>Header</h1>
                        <CardMedia square imageUrl='bchat_full.png'/>
                    </CardPrimaryContent>

                    <CardActions>
                        <CardActionButtons>
                            <button>Click Me1</button>
                        </CardActionButtons>

                        <CardActionIcons>
                            <i>Click Me Too!</i>
                        </CardActionIcons>
                    </CardActions>
                </Card>
            return tags
    }
}
export default MaterialDesingExample