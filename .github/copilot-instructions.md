# AI Coding Instructions for WTWR (What to Wear)

## Project Overview

WTWR is a React + Vite weather-based clothing recommendation app. Users see weather conditions (via OpenWeather API) and their clothing wardrobe organized by season (cold/warm/hot), with the ability to add/remove items. The app uses React Router for page navigation and Context API for temperature unit state.

## Architecture & Data Flow

### Component Hierarchy

- **App.jsx** (root state container): Manages weather data, clothing items, active modals, and temperature unit
- Routes:
  - `/` → **Main.jsx**: Displays weather card + filtered clothing items for current weather
  - `/profile` → **Profile.jsx**: Displays all wardrobe items; users can add/remove
- Modal system: `AddItemModal`, `ItemModal`, `ConfirmationModal` (controlled via `activeModal` string state in App)

### Data Flow

1. **Weather**: Fetches on App mount via `getWeather()` → filters via `filterWeatherData()` → passes to Header & Main
2. **Items**: Fetch on App mount via `getItems()` → stored in state → displayed in Main/Profile
3. **Context**: `CurrentTemperatureUnitContext` provides `currentTemperatureUnit` & `handleToggleSwitchChange` to ToggleSwitch

### External Services

- **OpenWeather API**: `https://api.openweathermap.org/data/2.5/weather` (hardcoded coordinates: Nashville TN)
- **Mock Server**: `http://localhost:3001` (serves db.json with `/items` endpoints for GET/POST/DELETE)

## Key Code Patterns

### Temperature Categories

```javascript
// From weatherApi.js: temperature determines recommended weather type
> 86°F → "hot" | 66-86°F → "warm" | < 66°F → "cold"
// Items have matching `weather` field to filter by condition
```

### Modal Pattern

```javascript
// App.jsx controls modals via activeModal string state
setActiveModal("add-garment"); // OR "preview" OR "delete" OR ""
// Each modal checks if isOpen={activeModal === "matching-string"}
```

### Form Handling

```javascript
// useForm.js (custom hook): { values, setValues, handleChange }
const { values, handleChange } = useForm({
  name: "",
  imageUrl: "",
  weatherType: "",
});
// Two-way binding: handleChange updates state, values reflects input
```

### API Pattern

```javascript
// All api.js calls: fetch() → .then(handleServerResponse) → .catch(console.error)
// handleServerResponse: returns res.json() if ok, rejects if res.status error
// POST adds new item to start of array: setClothingItems([data, ...clothingItems])
```

## Component-Specific Notes

### ItemCard.jsx

- Simple presentational component: displays item name + image
- Calls `onCardClick(item)` when image clicked → triggers ItemModal preview
- Referenced in Main.jsx & Profile.jsx (same component, different parents)

### Header.jsx

- Displays date via `new Date().toLocaleString("default", { month, day })`
- Shows city from weatherData
- ToggleSwitch & "Add clothes" button trigger modal state in parent (App)

### AddItemModal.jsx & ItemModal.jsx

- Form inputs named to match database schema: `name`, `imageUrl`, `weather` (NOT `imageUrl` vs `link`)
- ItemModal's delete flow: prompt confirmation → call `removeItem(_id)` → filter state → close modal

## Developer Workflows

### Setup

```bash
npm install                    # Install dependencies
npm run dev                   # Start dev server (localhost:3000, auto-opens)
npm run lint                  # ESLint check
npm run build                 # Production build → dist/
```

### Running the App

- Dev server auto-opens browser to `http://localhost:3000`
- **Must start mock server separately** to serve db.json on port 3001 (not included in package.json scripts)
- Hot reload via Vite when files change

### Testing Pattern Notes

- No test suite (none in package.json)
- Manual testing via dev server
- Check lint before commits: `npm run lint`

## Important Implementation Rules

1. **Always preserve data structure**: Items have `_id`, `name`, `imageUrl`, `weather`. Don't rename or change these fields.
2. **Weather type must match item weather field**: When adding items, validate weather input matches one of: "cold", "warm", "hot"
3. **Modal state is string-based**: Don't add boolean flags for modals; use `activeModal` state string
4. **Context usage**: Temperature unit is ONLY stored in context (via ToggleSwitch), passed via `CurrentTemperatureUnitContext.Provider`
5. **Error handling**: Use `.catch(console.error)` pattern; no custom error UI (noted as area for improvement in README)
6. **Asset imports**: Use `import.meta.url` for dynamic asset paths in weather condition mappings (see constants.js)

## Known Limitations & Future Improvements

- No responsive design (README notes this is primary improvement needed)
- Error handling lacks user feedback
- Mock server dependency hardcoded to localhost:3001 (no env config)
- Temperature unit context is isolated; doesn't persist across page reloads

## File Organization

- Components: `/src/components/[ComponentName]/ComponentName.jsx + .css`
- Utils: `/src/utils/` (api.js, weatherApi.js, constants.js)
- Hooks: `/src/hooks/` (useForm.js)
- Contexts: `/src/contexts/` (CurrentTemperatureUnitContext.jsx)
- Styles: Co-located with components; global styles in `/src/index.css` & vendor/
