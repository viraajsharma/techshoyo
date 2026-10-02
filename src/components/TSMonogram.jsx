import React from 'react';
import { motion } from 'framer-motion';

export const TS_PATHS = ['M 526 416 L 526 418 L 523 419 L 521 421 L 521 427 L 519 429 L 520 434 L 518 443 L 519 486 L 521 487 L 521 493 L 523 496 L 529 501 L 531 500 L 532 502 L 534 502 L 537 505 L 547 510 L 550 513 L 552 513 L 553 515 L 560 517 L 560 519 L 570 524 L 572 527 L 579 528 L 580 531 L 583 531 L 587 533 L 587 535 L 589 535 L 590 537 L 593 537 L 594 539 L 597 541 L 599 541 L 600 543 L 602 543 L 607 547 L 610 547 L 611 549 L 618 554 L 622 555 L 630 562 L 633 562 L 634 564 L 636 564 L 641 568 L 646 570 L 648 573 L 655 576 L 656 578 L 664 577 L 664 574 L 666 573 L 666 517 L 664 517 L 662 504 L 660 502 L 660 500 L 658 498 L 658 496 L 653 489 L 646 482 L 642 480 L 639 476 L 635 475 L 634 473 L 629 472 L 627 469 L 621 467 L 621 466 L 616 464 L 613 461 L 611 461 L 610 459 L 607 459 L 600 455 L 599 453 L 597 453 L 595 451 L 593 451 L 588 448 L 586 445 L 579 443 L 578 441 L 572 439 L 571 437 L 569 437 L 567 435 L 565 435 L 563 432 L 557 430 L 557 429 L 554 427 L 552 427 L 551 424 L 548 424 L 546 423 L 545 421 L 541 419 L 538 419 L 537 417 Z', 'M 249 288 L 250 293 L 255 297 L 265 310 L 267 310 L 267 312 L 275 319 L 277 323 L 279 324 L 279 326 L 284 329 L 288 336 L 289 335 L 291 339 L 304 351 L 303 352 L 309 357 L 312 358 L 313 361 L 316 361 L 320 363 L 321 365 L 325 365 L 327 367 L 334 368 L 339 367 L 341 368 L 362 368 L 365 367 L 372 368 L 392 368 L 396 367 L 396 369 L 398 367 L 406 368 L 408 367 L 412 368 L 413 367 L 417 368 L 421 367 L 429 361 L 431 361 L 433 358 L 437 357 L 437 355 L 439 355 L 449 349 L 450 346 L 455 345 L 456 342 L 462 341 L 464 338 L 468 337 L 470 334 L 476 330 L 478 330 L 479 328 L 481 328 L 485 324 L 488 324 L 489 322 L 491 322 L 495 318 L 497 318 L 500 315 L 500 313 L 502 312 L 502 288 L 500 286 L 500 283 L 254 283 L 254 285 L 250 286 Z', 'M 774 283 L 585 281 L 566 285 L 408 385 L 385 406 L 378 432 L 379 487 L 392 511 L 406 523 L 567 620 L 574 632 L 573 648 L 564 660 L 512 693 L 508 692 L 508 603 L 504 599 L 436 637 L 432 645 L 432 743 L 441 761 L 466 781 L 484 785 L 626 699 L 653 678 L 666 654 L 666 610 L 658 592 L 588 545 L 479 482 L 467 459 L 471 438 L 581 369 L 690 368 L 710 361 L 777 291 Z'];

export default function TSMonogram({ 
  className = "w-10 h-10", 
  fill = "currentColor", 
  stroke = "none", 
  strokeWidth = 0,
  animated = false,
  pathTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
}) {
  if (animated) {
    return (
      <svg 
        viewBox="200 240 624 580" 
        className={className} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {TS_PATHS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill={fill}
            stroke={stroke || "currentColor"}
            strokeWidth={strokeWidth || 4}
            initial={{ pathLength: 0, opacity: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, fillOpacity: 1 }}
            transition={pathTransition}
          />
        ))}
      </svg>
    );
  }

  return (
    <svg 
      viewBox="200 240 624 580" 
      className={className} 
      fill={fill} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {TS_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
