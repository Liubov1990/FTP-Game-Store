export const GAME_REQUIREMENTS_TEST_CASES = [
  {
    assertion: "should render component, when system requirements are unavailable",
    storeProps: null,
    expected: /System requirements are unavailable/i
  },
  {
    assertion: "should render 'os' field",
    storeProps: { minimum_system_requirements: { os: "test-windows-os" } },
    expected: /test-windows-os/i
  },
  {
    assertion: "should render value 'Unavailable' in 'os' field",
    storeProps: { minimum_system_requirements: { os: null } },
    expected: /Unavailable/i
  },
  {
    assertion: "should render 'processor' field",
    storeProps: { minimum_system_requirements: { processor: "test-processor" } },
    expected: /test-processor/i
  },
  {
    assertion:"should render value 'Unavailable' in 'processor' field",
    storeProps: { minimum_system_requirements: { processor: null } },
    expected: /Unavailable/i
  },
  {
    assertion: "should render 'memory' field",
    storeProps: { minimum_system_requirements: { memory: "test-memory" } },
    expected: /test-memory/i
  },
  {
    assertion:"should render value 'Unavailable' in 'memory' field",
    storeProps: { minimum_system_requirements: { memory: null } },
    expected: /Unavailable/i
  },
  {
    assertion: "should render 'graphics' field",
    storeProps: { minimum_system_requirements: { memory: "test-graphics" } },
    expected: /test-graphics/i
  },
  {
    assertion:"should render value 'Unavailable' in 'graphics' field",
    storeProps: { minimum_system_requirements: { graphics: null } },
    expected: /Unavailable/i
  },
  {
    assertion: "should render 'storage' field",
    storeProps: { minimum_system_requirements: { memory: "test-storage" } },
    expected: /test-storage/i
  },
  {
    assertion:"should render value 'Unavailable' in 'storage' field",
    storeProps: { minimum_system_requirements: { storage: null } },
    expected: /Unavailable/i
  },
];
