import * as React from 'react';
import {Box, IconButton, Modal} from "@material-ui/core";
import s from './ProfileEditModal.module.css'
import {EditForm} from "./EditForm";
import EditIcon from '@material-ui/icons/Edit';
import {UserProfileType} from "../../../redux/profile-reducer";

const style = {
    position: 'absolute' as 'absolute',
    fontFamily: 'Maven Pro',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};
type ProfileEditModalType = {
    profile: UserProfileType
}
export const ProfileEditModal: React.FC<ProfileEditModalType> = ({profile}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton size={'medium'} onClick={handleOpen}>
                <EditIcon/>
            </IconButton>
            {/*<Button style={{marginLeft: '10px', width: 'min-content', height: 'min-content'}}*/}
            {/*        size={'small'}*/}
            {/*        onClick={handleOpen}><EditIcon/></Button>*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={s.headerBlock}>
                        <h3>Edit your profile</h3>
                        <IconButton className={s.closeImg} size={'small'} onClick={handleClose}>
                            X
                        </IconButton>
                    </div>
                    <hr style={{opacity: '0.5'}}/>
                    <EditForm profile={profile} handleClose={handleClose}/>

                </Box>
            </Modal>
        </div>
    );
}