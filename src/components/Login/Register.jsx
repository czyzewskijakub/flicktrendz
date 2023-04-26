import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  useRef,
} from 'react';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import AuthContext from '../store/auth-context';
import classes from './Register.module.css';
import {useNavigate} from "react-router-dom";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const repeatPasswordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val.repeat, isValid: action.val.repeat === action.val.passw };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value === action.val.passw };
  }
  return { value: '', isValid: false };
};

const Register = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const [repeatPasswordState, dispatchRepeatPassword] = useReducer(repeatPasswordReducer, {
    value: '',
    isValid: null,
  })

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const { isValid: repeatPasswordIsValid } = repeatPasswordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('typing...');
      setFormIsValid(emailState.isValid && passwordState.isValid && repeatPasswordState.isValid);
    }, 500);

    return () => {
      //clean-up
      console.log('clean');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid, repeatPasswordIsValid]);

  const context = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const repeatPasswordInputRef = useRef();

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value});
  };

  const repeatPasswordChangeHandler = (event) => {
    dispatchRepeatPassword({ type: 'USER_INPUT', val: {repeat: event.target.value, passw: passwordState.value}})
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const validateRepeatPasswordHandler = () => {
    dispatchRepeatPassword({ type: 'INPUT_BLUR', val: {passw: passwordState.value}})
  }

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      navigate('/');
      context.onRegistered(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else if (!passwordIsValid){
      passwordInputRef.current.focus();
    } else {
      repeatPasswordInputRef.current.focus();
    }
  };


  return (
    <Card className={classes.register}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <Input
            ref={repeatPasswordInputRef}
            id="repeatPassword"
            label="Repeat password"
            type="password"
            isValid={repeatPasswordIsValid}
            value={repeatPasswordState.value}
            onChange={repeatPasswordChangeHandler}
            onBlur={validateRepeatPasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Register
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Register;
