리액트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것입니다.

프레젠테이셔널 컴포넌트란 주로 상태 관리가 이루어지지 않고, 그저 props를 받아 와서 화면에 UI를 보여 주기만 하는 컴포넌트를 말합니다.

이와 달리 컨테이너 컴포넌트는 리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아 오기도 하고 리덕스 스토어에 액션을 디스패치하기도 합니다.

이러한 패턴은 리덕스를 사용하는 데 필수는 아니다. 다만 이 패턴을 사용하면 코드의 재사용성도 높아지고, 관심사의 분리가 이루어져 UI를 작성할 때 좀 더 집중할 수 있습니다.

> 리덕스를 사용할 때는 액션 타입, 액션 생성 함수, 리듀서 코드를 작성해야한다.

이 코드를 각각 다른 파일에 작성하는 방법도 있고, 기능별로 묶어서 파일 하나에 작성하는 방법도 있다.

액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 하는 방식을 `Ducks` 패턴이라고 한다.

`Ducks` 패턴을 사용하여 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드를 '모듈'이라고 합니다.

액션 타입 정의할때 문자열 내용을 '모듈 이름/액션 이름' 과 같은 형태로 작성한다.

이는 문자열 안에 모듈 이름을 넣음으로써, 나중에 프로젝트가 커졌을때 액션의 이름이 충돌되지 않게 해주기 위함이다.

```javascript
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
```

`export default`는 단 한개만 내보내고 `export`는 여러개 내보낼수 있다.

불러올땐 다음과 같이 불러온다

```javascript
import counter from './counter';
import { increase, decrease} from './counter';
// 한꺼번에 불러오고싶다면
import counter, { increase, decrease } from './counter';
```

