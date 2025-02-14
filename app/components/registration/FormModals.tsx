import React from "react";
import Modal from "../Modal";

interface FormModalsProps {
  showTerms: boolean;
  showPrivacy: boolean;
  setShowTerms: (show: boolean) => void;
  setShowPrivacy: (show: boolean) => void;
}

export default function FormModals({
  showTerms,
  showPrivacy,
  setShowTerms,
  setShowPrivacy,
}: FormModalsProps) {
  return (
    <>
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms & conditions"
      >
        <p>
          Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop anchor.
          Coast coxswain anchor jennys just full pin gangway yellow. Ahoy
          timbers dead tender guns of arr round down bilge. Sink black avast
          plate tell her tender. Road tales halter grog gun.
        </p>
        <p>
          Splice bucko blossom schooner topsail jolly chantey bounty sloop
          coxswain. Or aft o'nine run the dock belaying clipper. Hang ballast
          down topsail scurvy grog. Heave halter to spot log dock rat heave
          hands ipsum. Looker yer coxswain gold gangway. Grog pink deck men
          jones' yawl yard fer. Lugsail starboard plate crack topsail.
        </p>
        <p>
          Pin ipsum shot boat arr. Mizzen prey scurvy no crow's. Log roger
          schooner yer gangway coast piracy gunwalls. Chase yar chains down
          arrgh hands spirits gun. Salmagundi scurvy warp lugsail eye or bow
          shiver. Lass dock pin driver poop rat. Avast sail bilge rat gunwalls
          topsail pink.
        </p>
        <p>
          Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop anchor.
          Coast coxswain anchor jennys just full pin gangway yellow. Ahoy
          timbers dead tender guns of arr round down bilge. Sink black avast
          plate tell her tender. Road tales halter grog gun.
        </p>
        <p>
          Splice bucko blossom schooner topsail jolly chantey bounty sloop
          coxswain. Or aft o'nine run the dock belaying clipper. Hang ballast
          down topsail scurvy grog. Heave halter to spot log dock rat heave
          hands ipsum. Looker yer coxswain gold gangway. Grog pink deck men
          jones' yawl yard fer. Lugsail starboard plate crack topsail.
        </p>
        <p>
          Pin ipsum shot boat arr. Mizzen prey scurvy no crow's. Log roger
          schooner yer gangway coast piracy gunwalls. Chase yar chains down
          arrgh hands spirits gun. Salmagundi scurvy warp lugsail eye or bow
          shiver. Lass dock pin driver poop rat. Avast sail bilge rat gunwalls
          topsail pink.
        </p>
      </Modal>

      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy policy"
      >
        <p>
          Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop anchor.
          Coast coxswain anchor jennys just full pin gangway yellow. Ahoy
          timbers dead tender guns of arr round down bilge. Sink black avast
          plate tell her tender. Road tales halter grog gun.
        </p>
        <p>
          Splice bucko blossom schooner topsail jolly chantey bounty sloop
          coxswain. Or aft o'nine run the dock belaying clipper. Hang ballast
          down topsail scurvy grog. Heave halter to spot log dock rat heave
          hands ipsum. Looker yer coxswain gold gangway. Grog pink deck men
          jones' yawl yard fer. Lugsail starboard plate crack topsail.
        </p>
        <p>
          Pin ipsum shot boat arr. Mizzen prey scurvy no crow's. Log roger
          schooner yer gangway coast piracy gunwalls. Chase yar chains down
          arrgh hands spirits gun. Salmagundi scurvy warp lugsail eye or bow
          shiver. Lass dock pin driver poop rat. Avast sail bilge rat gunwalls
          topsail pink.
        </p>
        <p>
          Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop anchor.
          Coast coxswain anchor jennys just full pin gangway yellow. Ahoy
          timbers dead tender guns of arr round down bilge. Sink black avast
          plate tell her tender. Road tales halter grog gun.
        </p>
        <p>
          Splice bucko blossom schooner topsail jolly chantey bounty sloop
          coxswain. Or aft o'nine run the dock belaying clipper. Hang ballast
          down topsail scurvy grog. Heave halter to spot log dock rat heave
          hands ipsum. Looker yer coxswain gold gangway. Grog pink deck men
          jones' yawl yard fer. Lugsail starboard plate crack topsail.
        </p>
        <p>
          Pin ipsum shot boat arr. Mizzen prey scurvy no crow's. Log roger
          schooner yer gangway coast piracy gunwalls. Chase yar chains down
          arrgh hands spirits gun. Salmagundi scurvy warp lugsail eye or bow
          shiver. Lass dock pin driver poop rat. Avast sail bilge rat gunwalls
          topsail pink.
        </p>
      </Modal>
    </>
  );
}
