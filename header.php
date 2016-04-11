<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
  <title></title>
</head>
<body <?php body_class(); ?>>

  <header id="site-header">
    <nav id="main-nav" role="navigation">
      <?php
      wp_nav_menu(array(
        'container'      => false,
        'menu_class'     => 'nav top-nav cf',
        'theme_location' => 'main'
      ));
      ?>
    </nav>
  </header>
