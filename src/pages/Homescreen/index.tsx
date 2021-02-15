import { IonContent, IonLabel, IonPage, IonButton } from '@ionic/react';
import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import { signIn } from '../../redux/actions/appActions';

const Homescreen: React.FC<RouteComponentProps> = ({ history }) => {
  const { mnemonic } = useSelector((state: any) => ({
    mnemonic: state.wallet.mnemonic,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (mnemonic && mnemonic !== '') {
      dispatch(signIn());
      history.push('/wallet');
    }
  }, [mnemonic]);

  return (
    <IonPage>
      <div className="gradient-background"></div>
      <IonContent>
        <div className="main-page-wrapper">
          <img className="logo" src="./assets/img/logo.png" />
          <div className="buttons homescreen">
            <IonButton className="main-button" routerLink="/login">
              <IonLabel>Setup wallet</IonLabel>
            </IonButton>
            <IonButton className="sub-button" routerLink="/restore">
              Restore wallet
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Homescreen;
