import React, {PropTypes} from "react";
import Layout from "../../layout/Layout";
import classnames from "classnames/bind";
import LayoutContainer from "../../layout/LayoutContainer";
import RaisedButton from 'material-ui/RaisedButton';
import styles from "./home.pcss";
import {html} from "./index.md";

const cx = classnames.bind(styles);

export default class HomePage extends React.Component {

    render() {
        return (
            <Layout>
                <div className={cx('home__banner')}>
                    <div className={cx('home__logo')} />
                    <div className={cx('home__slogan')}>

                        <h1>Just Married</h1>
                        <h4>Let's plan your wedding!</h4>

                        <RaisedButton label="Start here" secondary href={'#start'} />

                    </div>
                </div>


                <LayoutContainer>
                    <div dangerouslySetInnerHTML={{__html: html}}/>
                </LayoutContainer>
            </Layout>
        );
    }

}
