import React from 'react';
import { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

export default async function StarshipList(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const starships = await swapi.fetchList('/starships/');
  render();

  starships.more();

  function render() {
    if (!starships) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>Starships</h1>
          <List items={starships} field="name" pageName="starship-summary" route={route} />
        </div>
      );
    }
  }
}
