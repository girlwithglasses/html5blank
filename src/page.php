<?php
/*
Template Name: No Sidebars
*/
	get_header(); ?>

	<div class="main" id="primary" role="main">
		<!-- section -->
		<section>
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php	#$arr = get_category_parents( the_ID(), true, ' &raquo; ', true, true);
		print the_category( ' &raquo; ' );

?>				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			</article>
		<?php endwhile; ?>
		<?php else: ?>
				<h1><?php the_title(); ?></h1>
				<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
			</article>
		<?php endif; ?>
		</section>
	</div>

<?php // get_sidebar(); ?>

<?php get_footer(); ?>
