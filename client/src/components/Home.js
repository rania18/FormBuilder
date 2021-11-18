import { AppBar, Container, Typography } from '@material-ui/core'
import React from 'react'
import AddQuestions from './AddQuestions'
import { makeStyles } from "@material-ui/core/styles";

function Home() {
    return (
        <div>
            <Container maxWidth="lg">
              <AddQuestions/>
            </Container>
        </div>
    )
}

export default Home
