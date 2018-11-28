import React, { Component } from 'react';

import firebase from '../firebase'
import { withStyles } from '@material-ui/core/styles';
import {
    Button, Grid
} from '@material-ui/core';
import FileUploader from "react-firebase-file-uploader";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class CreateCategoryItem extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container direction="column">
                    <Grid item>
                        <FileUploader
                            accept="image/*"
                            name="avatar"
                            randomizeFilename
                            storageRef={firebase.storage().ref("gallery")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                            ref={instance => { this.fileUploader = instance; }}
                        />
                    </Grid>

                    <Grid item>
                        <Grid justify="flex-end" container direction="row" alignItems="center">
                            <Button className={classes.button} onClick={this.props.onCancel}>Скасувати</Button>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Створити
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

    handleUploadError = error => { }
    handleChangeUsername = event => { };
    handleUploadStart = () => { };
    handleProgress = progress => { };

    startUploadManually = () => {
        const { files } = this.state;
        files.forEach(file => {
            this.fileUploader.startUpload(file)
        });
    }
}

export default withStyles(styles)(CreateCategoryItem);