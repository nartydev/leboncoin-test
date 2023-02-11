# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---


## Process

Le test a été réalisé en 5h.

- J'ai consulté le README, la documentation de l'API après ça j'ai choisi les packages que j'allais utilisé, j'ai essayé d'utiliser un minimum de package pour ne pas avoir des packages exagéré par rapport au besoin de l'application. Le CSS est donc custom et réalisé avec Styled component.

- Après ça j'ai clean la base que j'avais pour l'adapter au mieux au nouveau design en évitant d'avoir du code inutile.

- Je suis parti sur Dribbble pour trouver un design qui me plaisait puis j'ai intégré les composants dont j'avais besoin pour créé les différents vues.

- Ensuite j'ai créé les services dont j'allais avoir besoin pour chaque fonctionnalité.

- J'ai utilisé SWR, une librairie qui utilise des hooks pour fetch de la donnée, qui est une librairie légère (228kb). Elle permet de faire un handling d'erreur global et elle me paraissait adapté par rapport aux besoins de l'application.

- Pour les tests j'ai voulu essayé de mock les calls axios mais j'ai eu quelques complications avec le fonctionnement de SWR donc j'ai switch sur MSW pour mock les calls de l'API. 

- J'ai tenté le delete de conversation ainsi que la création d'une conversation mais pour le delete j'ai eu une erreur 404 donc j'ai supprimé la feature et pour le create conversation, l'insert fonctionne bien dans le db.json mais lors du GET des conversations, je n'ai reçu que les 3 conversations qui existait déjà, j'ai pas voulu pousser plus loin étant donné que le test était déjà conseillé pour 4h et que j'avais débordé d'1h

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?
