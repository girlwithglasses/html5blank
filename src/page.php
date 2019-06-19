<?php
/*
Template Name: No Sidebars
*/
    get_header(); ?>

    <?php the_breadcrumb(); ?>

	<main class="main" id="primary" role="main" aria-label="Content">
		<!-- section -->
		<section>

			<h1><?php the_title(); ?></h1>

		<?php if ( have_posts()) : while ( have_posts() ) : the_post(); ?>

			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php	#$arr = get_category_parents( the_ID(), true, ' &raquo; ', true, true);
		print the_category( ' &raquo; ' );

?>				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			</article>
		<?php endwhile; ?>

		<?php else : ?>

			<!-- article -->
			<article>

				<h2><?php esc_html_e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

			</article>
		<?php endif; ?>
		</section>
	</div>

<?php // get_sidebar(); ?>

<?php get_footer(); ?>
