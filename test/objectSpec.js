describe("Given an AugmentedObject", () => {
  it("is defined", () => {
    expect(Obj.AugmentedObject).to.not.be.undefined;
  });

  describe("Given an AugmentedObject instance", () => {
    let AugmentedObject;
    beforeEach(() => {
			AugmentedObject = new Obj.AugmentedObject({stuff: "stuff"});
		});

		afterEach(() => {
			AugmentedObject = null;
		});

    it("has initialize", () => {
      expect(AugmentedObject.initialize).to.not.be.undefined;
    });

    it("can be created with options", () => {
      expect(AugmentedObject.options.stuff).to.equal("stuff");
    });

    it("can be extended", () => {
      class myAugmentedObject extends Obj.AugmentedObject {
        constructor(stuff, special) {
          super(stuff);
          this._special = special;
        };
        get special() {
          return this._special;
        }
      }

      const mAugmentedObject = new myAugmentedObject({stuff: "stuff"}, "hello");
      expect(mAugmentedObject.options.stuff).to.equal("stuff");
      expect(mAugmentedObject.special).to.equal("hello");
    });

    it("can be initialized without options", () => {
      class myAugmentedObject extends Obj.AugmentedObject {
        constructor() {
          super();
          this._special = "hello";
        };
        get special() {
          return this._special;
        }
      }

      const mAugmentedObject = new myAugmentedObject();
      expect(mAugmentedObject.special).to.equal("hello");
    });

    describe("Given an events", () => {
      const cb = (data) => {
        AugmentedObject.x = "I'm here!";
        AugmentedObject.data = data;
        return "I'm here!";
      };

      describe("Given an persistant events", () => {
        beforeEach(() => {
    			AugmentedObject.on("test", cb, AugmentedObject);
    		});

    		afterEach(() => {
    			AugmentedObject.off("test", cb, AugmentedObject);
    		});

        it("has events", () => {
          expect(AugmentedObject.events).to.not.be.undefined;
        });

        it("can set events", () => {
          AugmentedObject.events = {};
          expect(AugmentedObject.events).to.not.be.undefined;
        });

        it("has an registered event", () => {
          expect(AugmentedObject.events.test).to.not.be.undefined;
        });

        it("can trigger an event", async () => {
          const x = await AugmentedObject.trigger("test");
          expect(AugmentedObject.x).to.deep.equal("I'm here!");
        });

        it("can trigger an event with args", async () => {
          const x = await AugmentedObject.trigger("test", "some data");
          expect(AugmentedObject.x).to.deep.equal("I'm here!");
          expect(AugmentedObject.data).to.deep.equal("some data");
        });
      });
      describe("Given an event used once", () => {
        let obj;
        beforeEach(() => {
    			obj = AugmentedObject.once("testOnce", cb, AugmentedObject);
    		});

    		afterEach(() => {
    			AugmentedObject.off("testOnce", cb, AugmentedObject);
          obj = null;
    		});

        it("can register an event once", () => {
          expect(AugmentedObject.events.testOnce).to.not.be.undefined;
        });

        it("can trigger an event once", async () => {
          const x = await AugmentedObject.once("testOnce");
          const y = await AugmentedObject.trigger("testOnce");
          expect(y).to.not.be.undefined;
          expect(AugmentedObject.events.testOnce).to.be.undefined;
        });
      });
    });
  });
});
