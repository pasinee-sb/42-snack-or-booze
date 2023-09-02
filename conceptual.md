### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - to manage navigation and routing in React applications, allowing developers to create single-page applications with multiple views/pages while maintaining smooth user experiences and synchronized URLs.

- What is a single page application?
  - a single-page application (SPA) is a web application that operates within a single web page by dynamically updating content as users interact with it, without requiring full page reloads.

- What are some differences between client side and server side routing?
  - Client-side routing updates content on the same page without full server requests, offering smoother interactions but requiring more initial JavaScript. Server-side routing relies on the server to provide new content for each page, offering simpler initial setups and better SEO, but with slower user interactions due to round-trip requests.

- What are two ways of handling redirects with React Router? When would you use each?
  - Redirect Component:

      - Usage: You use the Redirect component to programmatically redirect users from one route to another. This can be placed within a Switch component to conditionally trigger the redirect.
      - When to Use: This method is useful when you need to control redirects based on specific conditions within your application, such as after a form submission or user authentication.
  - Imperative Navigation:

      - Usage: You use functions provided by React Router's history object (e.g., history.push(), history.replace()) to navigate and redirect users programmatically.
      - When to Use: This method is suitable for scenarios where you need to trigger a redirect based on certain events, such as user interactions or data changes, outside of the normal route rendering flow.
      - When to use each method depends on the context of your application:

         -  Redirect Component: Use this when you want to conditionally redirect users based on dynamic application state, such as user authentication status or form submission success. For instance, after a user logs in, you can use Redirect to take them to a specific authenticated route.
         -  Imperative Navigation: Use this when you need to redirect users programmatically in response to specific events that occur during user interaction or data updates. For example, after a user successfully completes an action on one page, you might use imperative navigation to send them to a different part of the application.

- What are two different ways to handle page-not-found user experiences using React Router? 
  - Route Configuration:  Create a route that acts as a catch-all for undefined paths. Render a custom "404 Not Found" component in this route's component. This way, when no other routes match, the "404" route will be triggered.
  - Redirect Approach: Use the Redirect component with a wildcard path (*) to redirect users to a designated "404" route. In that route, render the "404 Not Found" component. This approach triggers the redirection when no other routes are matched.

- How do you grab URL parameters from within a component using React Router?
  - useParams() hook 

- What is context in React? When would you use it?
  -  context in React is a feature that allows you to share data between components without explicitly passing it down through props at every level of the component tree. It provides a way to establish a global state that can be accessed by components nested deeply within the hierarchy.

- Describe some differences between class-based components and function
  components in React.
  - Class-based components in React use class syntax, manage state with this.state and setState(), and utilize lifecycle methods for managing component behavior; they are suitable for complex components with extensive logic. In contrast, function components, defined as plain functions, manage state using React Hooks like useState and handle effects with useEffect; they promote functional composition, are simpler and more concise, and are considered the preferred approach in modern React development for improved readability and maintainability.