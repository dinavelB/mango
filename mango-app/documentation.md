### In the css class, youll use the default class and call the customized attribute. Ex.

1. bg = default class, --sidebar-accent = customized class in css,
   when called: bg-sidebar-accent

### Layouts in shadcn/layout.tsx

1. Layout like in sidebar are used as a custom container, it will automatically recognize as a child for the layout
   dependencies: user defined sidebar => layout called uds for sidebar => layout used as a container in child com, eg. dashboard, settings, analytics, etc.

### Routing

## useNavigate

1. useNavigate is dependent on app tsx with routes or imported navigation tsx with routes

### Web Hooks

## useEffect

- good for tracking url pathname for active state
  process:

1. check if the route exists and match to url pathname
2. if true run setActive for state
