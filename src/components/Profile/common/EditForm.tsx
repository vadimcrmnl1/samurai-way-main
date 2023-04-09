import React from "react";
import {useFormik} from "formik";
import s from './ProfileEditModal.module.css'
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {TextFieldComponent} from "../../common/TextFieldComponent/TextFieldComponent";
import {useDispatch} from "react-redux";
import {editProfileTC, getUserProfile, UserProfileType} from "../../../redux/profile-reducer";

type EditFormPropsType = {
    handleClose: () => void
    profile: UserProfileType
}

const validationSchema = {}

export const EditForm: React.FC<EditFormPropsType> = ({handleClose, profile}) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            userId: profile.userId,
            lookingForAJob: true,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            contacts: {
                github: profile.contacts.github,
                vk: profile.contacts.vk,
                facebook: profile.contacts.facebook,
                instagram: profile.contacts.instagram,
                twitter: profile.contacts.twitter,
                website: profile.contacts.website,
                youtube: profile.contacts.youtube,
                mainLink: profile.contacts.mainLink,
            }

        },
        // validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(editProfileTC(values))
            dispatch(getUserProfile(profile.userId as string))
            handleClose()
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.editFormBlock}>
                <div className={s.leftBlock}>
                    <h4>Information:</h4>
                    <TextFieldComponent id={'fullName'} name={'fullName'} value={formik.values.fullName}
                                        label={'Full name'}
                                        onChange={formik.handleChange}/>
                    <TextFieldComponent id={'aboutMe'} name={'aboutMe'} label={'About me'} value={formik.values.aboutMe}
                                        onChange={formik.handleChange}/>
                    <FormControl style={{marginTop: '15px'}}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Looking for a job?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"

                        >
                            <FormControlLabel id={'lookingForAJobDescription'} name={'lookingForAJobDescription'}
                                              value="true" control={<Radio color={'primary'} size={'small'}/>}
                                              label="Yes"/>
                            <FormControlLabel id={'lookingForAJobDescription'} name={'lookingForAJobDescription'}
                                              value="false" control={<Radio color={'secondary'} size={'small'}/>}
                                              label="No"/>

                        </RadioGroup>
                    </FormControl>
                    <TextFieldComponent id={'lookingForAJobDescription'} name={'lookingForAJobDescription'}
                                        value={formik.values.lookingForAJobDescription}
                                        label={'Looking for a job description'} onChange={formik.handleChange}/>
                </div>
                <div className={s.rightBlock}>
                    <h4>Contacts:</h4>
                    <TextFieldComponent id={'contacts.github'} name={'contacts.github'} label={'GitHub'}
                                        onChange={formik.handleChange} value={formik.values.contacts.github}/>
                    <TextFieldComponent id={'contacts.vk'} name={'contacts.vk'} label={'VK'}
                                        onChange={formik.handleChange} value={formik.values.contacts.vk}/>
                    <TextFieldComponent id={'contacts.facebook'} name={'contacts.facebook'} label={'Facebook'}
                                        onChange={formik.handleChange} value={formik.values.contacts.facebook}/>
                    <TextFieldComponent id={'contacts.instagram'} name={'contacts.instagram'} label={'Instagram'}
                                        onChange={formik.handleChange} value={formik.values.contacts.instagram}/>
                    <TextFieldComponent id={'contacts.twitter'} name={'contacts.twitter'} label={'Twitter'}
                                        onChange={formik.handleChange} value={formik.values.contacts.twitter}/>
                    <TextFieldComponent id={'contacts.website'} name={'contacts.website'} label={'Your website'}
                                        onChange={formik.handleChange} value={formik.values.contacts.website}/>
                    <TextFieldComponent id={'contacts.youtube'} name={'contacts.youtube'} label={'Youtube'}
                                        onChange={formik.handleChange} value={formik.values.contacts.youtube}/>
                    <TextFieldComponent id={'contacts.mainLink'} name={'contacts.mainLink'} label={'MainLink'}
                                        onChange={formik.handleChange} value={formik.values.contacts.mainLink}/>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <Button onClick={handleClose} color={'secondary'} variant={'outlined'}>Cancel</Button>
                <Button type={'submit'} color={'primary'} variant={'outlined'}>Save</Button>
            </div>

        </form>
    )
}