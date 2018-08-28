import System from "../../src/core/System";

describe( "System", () => {
	let instance: System;
	let mockMethod;
	const config = {
		name: "my-system-name",
		componentTypes: [ "position", "velocity" ]
	};

	// Create a new system instance to run tests on
	beforeEach( () => {
		instance = new System( config );
		mockMethod = jest.fn();
		mockMethod.mockReturnValue( true );
		instance.addMethod( "mock-method", mockMethod );
	});

	it( "should be named via config object.", () => {
		expect( instance.name ).toBe( config.name );
	});

	it( "should have at least one watched component type.", () => {
		expect( instance.watchedComponentTypes.length ).toBeGreaterThan( 0 );
	});

	it( "should have user defined methods.", () => {
		expect( instance.dispatch( "mock-method" ) ).toBe( true );
	});

	test( "Dispatch calls the user-defined method once.", () => {
		instance.dispatch( "mock-method" );
		expect( mockMethod.mock.calls.length ).toBe( 1 );
	});

});
