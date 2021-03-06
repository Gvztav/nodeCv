<!DOCTYPE html>
<html ng-app="spaApp">
  <head>
    <title><%= message %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
    <script src="/js/app.js"></script>
  </head>
  <body>
    <h1><%= message %></h1>

    <ng-view></ng-view>

    <!-- Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-resource.min.js"></script>

    <!-- Template -->
    <script type="text/ng-template" id="/todos.html">
      Search: <input type="text" ng-model="search.name">
      <ul>
        <li ng-repeat="todo in todos | filter: search">
          <input type="checkbox" ng-model="todo.completed" ng-change="update($index)">
          <a ng-show="!editing[$index]" href="#/{{todo._id}}">{{todo.name}}</a>
          <button ng-show="!editing[$index]" ng-click="edit($index)">edit</button>

          <input ng-show="editing[$index]" type="text" ng-model="todo.name">
          <button ng-show="editing[$index]" ng-click="update($index)">Update</button>
          <button ng-show="editing[$index]" ng-click="cancel($index)">Cancel</button>
          <button ng-show="!editing[$index]" ng-click="remove($index)">remove</button>
        </li>
      </ul>
      New task <input type="text" ng-model="newTodo"><button ng-click="save()">Create</button>
    </script>

    <script type="text/ng-template" id="/todoDetails.html">
      <h1>{{ todo.name }}</h1>
      completed: <input type="checkbox" ng-model="todo.completed"><br>
      note: <textarea ng-model="todo.note"></textarea><br><br>

      <button ng-click="update()">Update</button>
      <button ng-click="remove()">Remove</button>
      <a href="/">Cancel</a>
    </script>


   
  </body>
</html>
