Issue 1:
In class, we refactored the task status so it can be toggled back and forth, and tasks can be marked as uncompleted. Your manager wants this feature implemented by Monday.

Issue 2:
Your colleague has feedback after a code review. She points out that tasks are only ever completed or not completed, and that your code might be clearer if you represent isCompleted as a boolean value instead of task.status as a magic number. Refactor the code to use an isCompleted flag on tasks. Remember that you still want to update the server every time a task is marked as completed or not completed.

Issue 3:
Your manager comes to you with a new feature request. She wants to see the categories in the UI of the app as well as the tasks. Can you create a categories factory and fetch the existing categories when the app boots up? How do you want to display them in the view?

Issue 4:
Your colleague points out that createTask and removeCompleted are really functions that ought to be the responsibility of the TaskFactory and not in the controller. Refactor the business logic and REST calls out of the controller and into the TaskFactory, so that you can call TaskFactory.create(taskObject) from inside $scope.createTask, and just use the controller to wire these functions to the view.

Issue 5: 
Your product owner comes to you with ideas for a UI that shows the existing categories on the screen and each one is clickable. When one category is selected, only tasks belonging to that category are displayed in the list. When no category is selected, all tasks are displayed.  (Hints: save the selected category as $scope.selectedCategory, and use ng-repeat with a filter to show only a subset of tasks. Stuck? look at the angular documentation for filter filter or search stack overflow for examples.)

Issue 6: 
Your product owner comes to you with a glimmer in her eye. She wants to know if it's possible to color code the tasks based on which category they belong to. You say, "sure, it's possible, but I'm not sure how long it will take." Investigate the possibility of using angular to manipulate the CSS class of tasks based on their category. You might add color as an attribute on categories (which could require back end changes), or assign colors programmatically to each new category.
